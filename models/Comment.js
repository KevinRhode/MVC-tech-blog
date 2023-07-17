// Importing the required modules from Sequelize
const { Model, DataTypes } = require('sequelize');

// Importing the Sequelize instance (connection to the database)
const sequelize = require('../config/connection');

// Defining the Comment model by extending the Sequelize Model class
class Comment extends Model {}

// Initializing the Comment model with attribute definitions
Comment.init(
  {
    // id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // description column
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // date_created column
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    // user_id column
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user', // References the 'user' model
        key: 'id', // References the 'id' column in the 'user' model
      },
    },
    // blogpost_id column
    blogpost_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'blogpost', // References the 'blogpost' model
        key: 'id', // References the 'id' column in the 'blogpost' model
      },
    },
  },
  {
    sequelize, // Specifies the Sequelize instance
    timestamps: false, // Disables the automatic creation of 'createdAt' and 'updatedAt' columns
    freezeTableName: true, // Prevents Sequelize from pluralizing the table name
    underscored: true, // Converts camel-cased model names to underscored table names
    modelName: 'comment', // Sets the model name
  }
);

// Exporting the Comment model
module.exports = Comment;
