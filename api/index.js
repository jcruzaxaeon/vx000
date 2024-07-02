

// ./index.js

// DATABASE
import sequelize from './config/db.js';

// MODELS
import Users from './models/Users.js';
import Targets from './models/Targets.js';

// APPLICATION
import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;



// Middleware to parse JSON request bodies
app.use(cors());
app.use(express.json());



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



app.get('/', (req, res) => {
    res.send('Hello World!');
});



app.get('/api/users', async (req, res) => {
    try {
        const userList = await Users.findAll();
        res.json(userList);
    }
    catch {
        console.log("Error");
    }
});



app.get('/api/targets', async (req, res) => {
    try {
        const targetList = await Targets.findAll();
        res.json(targetList);
    }
    catch {
        console.log("Error");
    }
});



// Create a new user - 201
// - api/users
app.post('/api/users', async (req, res) => {
    const { username, password, name } = req.body;
    
    try {
        const newUser = await Users.create({
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



// Create a new target - 201
// - api/targets
app.post('/api/targets', async (req, res) => {
    const { name, categories, userId } = req.body;
    
    try {
        const newTarget = await Targets.create({
            name,
            categories,
            owner_user_key: userId,
        });
        res.status(201).json(newTarget);
    } catch (err) {
        console.error('Error creating user\n\n', err);
        res.status(500).send('Internal Server Error');
    }
});



// Delete target - ?204?
// - api/targets/:id
app.delete('/api/targets/delete/:id', async (req, res) => {    
    try {
        await Targets.findByPk(req.params.id);
        await Targets.destroy({ where: {id: req.params.id}});
        res.status(204).send();
    } catch (err) {
        console.error('Error deleting target\n\n', err);
    }
});

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});