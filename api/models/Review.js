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
      type: DataTypes.ENUM('basic', 'standard', 'full'),
      defaultValue: 'basic',
    },
    tierlist: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    item: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    details: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    tier: {
      type: DataTypes.ENUM('S', 'A', 'B', 'C', 'D', 'E', 'F'),
      defaultValue: 'C',
    },
    visibility: {
      type: DataTypes.ENUM('private', 'shared', 'public'),
      defaultValue: 'private',
    },
    alias: {
      type: DataTypes.STRING(255),
      defaultValue: 'Node',
    },
    disambiguation: {
      type: DataTypes.STRING(45),
      defaultValue: 'Perfect disambiguation',
    },
    category: {
      type: DataTypes.STRING(45),
      defaultValue: 'Category',
    },
    type: {
      type: DataTypes.STRING(45),
      defaultValue: 'Type',
    },
    user_fk: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    node_fk: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rubric_fk: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    comment: {
      type: DataTypes.TEXT('medium'),
      allowNull: true,
    },
    data: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    score: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    brief: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    categories: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    tags: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Review',
    tableName: 'reviews',
  }
);

// Define associations
Review.belongsTo(sequelize.models.User, { as: 'User', foreignKey: 'user_fk' });
Review.belongsTo(sequelize.models.Node, { as: 'Node', foreignKey: 'node_fk' });

export default Review;