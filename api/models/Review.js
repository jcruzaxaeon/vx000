

// ./api/models/Review.js

import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/db.js'; // Adjust the path if necessary

class Review extends Model {}

Review.init(
  {
    review_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true,
    },
    review_type: {
      type: DataTypes.STRING(20),
      defaultValue: 'Standard',
    },
    alias: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: 'Node',
    },
    disambiguation: {
      type: DataTypes.STRING(45),
      defaultValue: 'Perfect disambiguation'
    },
    tier: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: 'C',
    },
    category: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: 'Category',
    },
    type: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: 'Type',
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    categories: {
      type: DataTypes.JSON,
    },
    tags: {
      type: DataTypes.JSON,
    },
    brief: {
      type: DataTypes.STRING(255),
    },
    comment: {
      type: DataTypes.TEXT, // This can store longer text descriptions
    },
    user_fk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users', // Referenced table name
        key: 'user_id', // Column name in the referenced table
      },
    },
    node_fk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'nodes', // Referenced table name
        key: 'node_id', // Column name in the referenced table
      },
    },
    rubric_fk: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW, // Use Sequelize's NOW function for automatic timestamps
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW, // Use Sequelize's NOW function for automatic timestamps
    },
  },
  {
    sequelize,
    modelName: 'Review', // Sequelize's model-name
    tableName: 'reviews', // Explicitly specifying the DB table name
  }
);

// Define associations
Review.belongsTo(sequelize.models.User, { as: 'User', foreignKey: 'user_fk' });
Review.belongsTo(sequelize.models.Node, { as: 'Node', foreignKey: 'node_fk' });

export default Review;
