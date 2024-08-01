

// ./api/routes/user-routes.js

import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import { authenticateUser, generateToken } from '../middleware/authentication.js';

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

export default router;

