

// ./api/index.js

// DATABASE
//
import sequelize from './config/db.js';

// MODELS
// import Users from './models/User.js';
// import Targets from './models/Target.js';

// APPLICATION
//
import express from 'express';
import cors from 'cors';
const app = express();
const port = process.env.PORT || 3000;
const enableGlobalErrorLogging = process.env.ENABLE_GLOBAL_ERROR_LOGGING;

// import crypto from 'crypto';
// const secret = crypto.randomBytes(64).toString('hex');
// console.log(secret);

// Middleware to parse JSON request bodies
//
app.use(cors());
app.use(express.json());

// ROUTES
//
import userRoutes from './routes/user-routes.js';
import targetRoutes from './routes/target-routes.js';
import gradeRoutes from './routes/grade-routes.js';
//
app.use(userRoutes);
app.use(targetRoutes);
app.use(gradeRoutes);
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// DATABASE
//
// Test DB Connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection made.')
    })
    .catch(err => {
        console.error('Unable to connect\n\n', err);
    });



// Sync the model with the database
sequelize.sync()
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch(err => {
        console.error('Error creating user\n\n', err);
    });

// send 404 if no other route matched
app.use((req, res) => {
    res.status(404).json({
       message: 'Route Not Found',
    });
 });
 
 // setup a global error handler
 app.use((err, req, res, next) => {
    let errors = [];
    
    if (enableGlobalErrorLogging) {
       console.error(`Global error handler: ${JSON.stringify(err.stack)}`);
    }
 
    if (err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError') {
       errors = err.errors.map(e => e.message);
       // console.log(errors);
       // res.status(400).json({ errors });
       err.status = 400;
    }
 
    console.log("ERROR CATCHER");
    res.status(err.status || 500).json({
       msg: err.message,
       errors: err.errs,
    });
 });


app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});