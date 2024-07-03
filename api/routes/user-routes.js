


// ./api/routes/user-routes.js

import express from 'express';
import User from '../models/User.js';

const router = express.Router();



// ### GET, 200 - OK
// - [ ] (!!!) revamp code to only return authenticated user
// - Return authenticated user's info
router.get('/v1/api/user', async (req, res) => {
    try {
        const userList = await User.findAll();
        res.json(userList);
    }
    catch {
        console.log("Error");
    }
});



// ### POST, 201 - Created
// - Create a new user
router.post('v1/api/user', async (req, res) => {
    const { username, password, name } = req.body;
    
    try {
        const newUser = await User.create({
            username,
            password,
            name
        });
        res.status(201).json(newUser);
    } catch (err) {
        console.error('Error creating user\n\n', err);
        res.status(500).send('Internal Server Error');
    }
});

export default router;

