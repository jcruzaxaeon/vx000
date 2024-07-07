

// ./api/routes/user-routes.js

import express from 'express';
import User from '../models/User.js';
import auth from '../middleware/authenticate.js';

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
// - [ ] (!!!) revamp code to only return authenticated user
// - Return authenticated user's info
router.get('/v1/api/users', auth, async (req, res) => {
    try {
        const userList = await User.findAll();
        res.json(userList);
    }
    catch (err) {
        console.log("Error");
        next(err);
    }
});



// ### POST, 201 - Created
// - Create a new user
router.post('/v1/api/users', async (req, res, next) => {
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

        const newUser = await User.create({
            email,
            password,
            name,
            username,
        });
        res.status(201).json(newUser);
    } catch (err) {
        console.error('\nError creating user\n\n', err);
        next(err);
        // res.status(500).send('Internal Server Error');
    }
});

export default router;

