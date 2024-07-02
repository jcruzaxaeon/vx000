

// ./models/Targets.js

import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/db.js'; // !!! Adjust the path if necessary

class Target extends Model {}

Target.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  categories: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  tags: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  aliases: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  owner_user_key: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
//   createdAt: {
//     type: DataTypes.DATE,
//     allowNull: false,
//     defaultValue: CURRENT_TIMESTAMP
//   },
//   updatedAt: {
//     type: DataTypes.DATE,
//     allowNull: false,
//     defaultValue: CURRENT_TIMESTAMP
//   },
}, {
  sequelize,
  modelName: 'Target', // Sequelize's model-name
  tableName: 'targets', // Explicitly specifying the DB table name
});

export default Target;

