

// index.js

import envConfig from './config/env.js';
import express from 'express';
import { Sequelize } from 'sequelize';

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

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});