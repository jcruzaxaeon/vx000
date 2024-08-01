

// ./api/middleware/authentication.js
// 
// #### Used by:
// - ./api/routes/user-routes.js
// - 

'use strict';

// import auth from 'basic-auth'; // $ npm i basic-auth
import jwt from 'jsonwebtoken';   // $ npm i jsonwebtoken
// import bcrypt from 'bcrypt';      // `$ npm i bcrypt`. (6) deprecated msgs. Other options: argon2, scrypt
import User from '../models/User.js';

/**
 * ### `authenticate` Middleware
 * - `Authorization Type`: "Basic Authorization"
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export async function authenticateUser(req, res, next) {

    // const credentials = auth(req); // name:pass
    // console.log(credentials);
    const authHeader = req.headers.authorization;

    // if (!credentials) { setError(res, 'Auth header not found'); return; }
    // const user = await User.findOne({
    //     where: { email: credentials.name }
    // });
    if (!authHeader) { return res.status(401).json({ message: 'Authorization header missing' }); }

    const [bearer, token] = authHeader.split(' ');

    if (bearer !== 'Bearer' || !token) { return res.status(401).json('Invalid authorization header'); }

    try {
        console.log("Token:", token);
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded:", decoded);
        const user = await User.findByPk(decoded.userId);
        console.log("User:", user);

        if (!user) return res.status(401).json({message: 'User not found'});

        req.currentUser = user;
        next();
    } catch (err) {
        return res.status(401).json({message: 'Invalid token'});
    }

    // // Encrypted
    // const authenticated = bcrypt
    //     .compareSync(credentials.pass, user.password);

    // Plain-text
    // console.log(`User: "${user}"`);
    // let authenticated = false;
    // if (credentials.pass === user.password) authenticated = true;

    // if (!authenticated) { setError(res, 'Authentication failure'); return; }
    // req.currentUser = user;

    // next();
}

// function setError(res, msg) {
//     console.warn(msg);
//     res.status(401).json({ errorMessage: 'Access Denied' });
//     return;
// }

export function generateToken(user) {
    return jwt.sign(
        {userId: user.user_id},
        process.env.JWT_SECRET, // !!!
        {expiresIn: process.env.JWT_EXPIRATION },
    );
}

export default authenticateUser;