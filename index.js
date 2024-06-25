

// index.js

import envConfig from './config/env.js';
import express from 'express';
import { Sequelize, DataTypes } from 'sequelize';

const app = express();
const port = process.env.PORT || 3000;

const environment = process.env.NODE_ENV || 'dev';
const config = envConfig[environment];

console.log(config);

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect,
        port: config.port,
    },
);



// Test DB Connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection made.')
    })
    .catch(err => {
        console.error('Unable to connect\n\n', err);
    });



// Define a model
const User = sequelize.define('User', {
    // Define attributes
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: true
    }
}, {
    // Other model options
    tableName: 'users', // Explicitly specifying the table name
    timestamps: false // Disabling automatic creation of `createdAt` and `updatedAt` columns
});

// Sync the model with the database
sequelize.sync()
    .then(() => {
        console.log('Database & tables created!');

        // Create a new user
        return User.create({
            username: 'aaa',
            password: 'aaa',
            name: 'aaa'
        });
    })
    .then(user => {
        console.log('User created:', user.toJSON());
    })
    .catch(err => {
        console.error('Error creating user\n\n', err);
    });



app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});