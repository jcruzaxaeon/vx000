

// ./config/db.js

import { Sequelize } from 'sequelize';
import envConfig from './env.js';

const environment = process.env.NODE_ENV || 'dev';
const config = envConfig[environment];

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

export default sequelize;

