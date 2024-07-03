

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

// Middleware to parse JSON request bodies
//
app.use(cors());
app.use(express.json());

// ROUTES
//
import userRoutes from './routes/user-routes.js';
import targetRoutes from './routes/target-routes.js';

app.use(userRoutes);
app.use(targetRoutes);
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




app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});