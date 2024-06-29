

// ./models/Users.js

import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/db.js'; // !!! Adjust the path if necessary

class User extends Model {}

User.init({
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
    sequelize,
    modelName: 'User',  // Sequelize's model-name
    tableName: 'users', // Explicitly specifying the DB table name
    // timestamps: true // Enable automatic creation of `createdAt` and `updatedAt` columns
});

export default User;

// Define a model
// const User = sequelize.define('User', {
//     // Define attributes
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     username: {
//         type: DataTypes.STRING(45),
//         allowNull: false,
//         unique: true
//     },
//     password: {
//         type: DataTypes.STRING(45),
//         allowNull: false
//     },
//     name: {
//         type: DataTypes.STRING(255),
//         allowNull: true
//     }
// }, {
//     // Other model options
//     tableName: 'users', // Explicitly specifying the table name
//     timestamps: false // Disabling automatic creation of `createdAt` and `updatedAt` columns
// });