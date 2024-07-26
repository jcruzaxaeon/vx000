

// ./api/models/Node.js

import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/db.js'; // !!! Adjust the path if necessary

class Node extends Model {}

Node.init({
  node_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
    defaultValue: 'Noname'
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
  categories: {
    type: DataTypes.JSON,
    allowNull: true
  },
  tags: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: null
  },
  aliases: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: null
  },
  data: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: null
  },
  description: {
    type: DataTypes.TEXT('medium'),
    allowNull: true,
    defaultValue: null
  },
  owner_fk: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    references: {
      model: 'users',
      key: 'user_id'
    }
  },
  updater_fk: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'users',
      key: 'user_id'
    }
  },
  // isEmailVerified: {
  //   type: DataTypes.TINYINT,
  //   allowNull: false,
  //   defaultValue: 0
  // },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
  }
}, {
  sequelize,
  modelName: 'Node',
  tableName: 'nodes',
  timestamps: true
});

// Define associations
Node.belongsTo(sequelize.models.User, { as: 'Owner', foreignKey: 'owner_fk' });
Node.belongsTo(sequelize.models.User, { as: 'Updater', foreignKey: 'updater_fk' });

export default Node;

