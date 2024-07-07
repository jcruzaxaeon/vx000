

// ./api/middleware/authenticate.js
// 
// #### Used by:
// -
// - 

'use strict';

import auth from 'basic-auth'; // $ npm i basic-auth
import bcrypt from 'bcrypt'; // `$ npm i bcrypt`. (6) deprecated msgs. Other options: argon2, scrypt
import User from '../models/User.js';

/**
 * ### `authenticate` Middleware
 * - `Authorization Type`: "Basic Authorization"
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
async function authenticate(req, res, next) {

    const credentials = auth(req); // name:pass
    console.log(credentials);

    if (!credentials) { setError(res, 'Auth header not found'); return; }
    const user = await User.findOne({
        where: { email: credentials.name }
    });

    if (!user) { setError(res, 'Email not found'); return; }
    // // Encrypted
    // const authenticated = bcrypt
    //     .compareSync(credentials.pass, user.password);

    // Plain-text
    console.log(`User: "${user}"`);
    let authenticated = false;
    if (credentials.pass === user.password) authenticated = true;

    if (!authenticated) { setError(res, 'Authentication failure'); return; }
    req.currentUser = user;

    next();
}

function setError(res, msg) {
    console.warn(msg);
    res.status(401).json({ errorMessage: 'Access Denied' });
    return;
}

export default authenticate;