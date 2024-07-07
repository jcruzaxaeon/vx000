

// ./api/models/Grade.js

import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/db.js'; // Adjust the path if necessary

class Grade extends Model {}

Grade.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    node_alias: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: 'Target',
    },
    grade: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    categories: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    comment: {
      type: DataTypes.TEXT, // This can store longer text descriptions
      allowNull: true,
    },
    tags: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    fk_user: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users', // Referenced table name
        key: 'id', // Column name in the referenced table
      },
    },
    fk_target: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'targets', // Referenced table name
        key: 'id', // Column name in the referenced table
      },
    },
    // createdAt: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    //   defaultValue: DataTypes.NOW, // Use Sequelize's NOW function for automatic timestamps
    // },
    // updatedAt: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    //   defaultValue: DataTypes.NOW, // Use Sequelize's NOW function for automatic timestamps
    // },
  },
  {
    sequelize,
    modelName: 'Grade', // Sequelize's model-name
    tableName: 'grades', // Explicitly specifying the DB table name
  }
);

export default Grade;

