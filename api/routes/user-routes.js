

// ./api/routes/user-routes.js

import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { authenticateUser, generateToken } from '../middleware/authentication.js';
import { sendResetEmail } from '../services/email.js';
import { Op } from 'sequelize';

class Report extends Error {
    constructor(message, errs) {
        super(message);
        this.name = this.constructor.name;
        this.errs = errs; // List of errors (array)
        Error.captureStackTrace(this, this.constructor);
    }
}

const router = express.Router();
router.use(express.json());



// ### GET, 200 - OK
// - VERIFY VALID TOKEN
router.get('/v1/api/token', authenticateUser, (req, res) => {
    // If the middleware passes, the token is valid
    res.json({ valid: true, user: { id: req.currentUser.id } }); // , email: req.user.email 
});


// ### GET, 200 - OK
// - [ ] (!!!) revamp code to only return authenticated user
// - Return authenticated user's info
// router.get('/v1/api/users', authenticateUser, async (req, res) => {
//     try {
//         const userList = await User.findAll();
//         res.json(userList);
//     }
//     catch (err) {
//         console.log("Error");
//         next(err);
//     }
// });



// ### POST, 201 - Created
// - Create a new user
router.post('/v1/api/users', async (req, res, next) => {
    console.log('here');
    const user = req.body;
    const { email, password, name, username } = user;

    // Validations
    const errMsgs = [];

    try {
        if (!user) errMsgs.push('Missing: Body Payload');
        if (!user.email) errMsgs.push('Missing: Email Address');
        if (!user.password) errMsgs.push('Missing: Password');
        if (errMsgs.length > 0) {
            const report = new Report('Invalid User-Data', errMsgs);
            report.status = 400;
            throw report;
        }

        const hashedPass = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            email,
            password: hashedPass,
            name,
            username,
        });
        const token = generateToken(newUser);
        res.status(201).json({ message: 'User created successfully', token });
        // res.status(201).json(newUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
        // console.error('\nError creating user\n\n', err);
        // next(err);
        // res.status(500).send('Internal Server Error');
    }
});



// ### POST, 201 - Login
// - User login
router.post('/v1/api/login', async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: {email} });
        console.log("User where: {email}", user);
        if (!user) return res.status(401).json({ message: 'Access Denied' });

        const isAuthenticated = await bcrypt.compare(password, user.password);
        if (!isAuthenticated) return res.status(401).json({ message: 'Invalid credentials' });

        const token = generateToken(user);
        res.json({ token });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});



// ### POST, 201 - Initiate a Password Reset
router.post('/v1/api/reset-password-request', async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const resetToken = crypto.randomBytes(20).toString('hex');
        const resetTokenExpiry = Date.now() + 3600000; // 1 hour from now

        await user.update({
            reset_token: resetToken,
            reset_token_expiry: resetTokenExpiry
        });

        await sendResetEmail(email, resetToken);

        res.json({ message: 'Password reset email sent' });
    } catch (error) {
        console.error('Error in password reset request:', error);
        res.status(500).json({ message: 'Server error' });
    }
});



// ### POST, 201 - Complete a Password Reset
router.post('/v1/api/reset-password', async (req, res) => {
    const { token, newPassword } = req.body;
    console.log('RESET PASSWORD ()()())()()()');

    try {
        const user = await User.findOne({
            where: {
                reset_token: token,
                reset_token_expiry: { [Op.gt]: Date.now() }
            }
        });

        if (!user) {
            return res.status(400).json({ message: 'Invalid or expired reset token' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        await user.update({
            password: hashedPassword,
            resetToken: null,
            resetTokenExpiry: null
        });

        res.json({ message: 'Password reset successful' });
    } catch (error) {
        console.error('Error in password reset:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;