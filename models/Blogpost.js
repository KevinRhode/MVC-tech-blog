// Importing the required modules from Sequelize
const { Model, DataTypes } = require('sequelize');

// Importing the Sequelize instance (connection to the database)
const sequelize = require('../config/connection');

// Defining the Blogpost model by extending the Sequelize Model class
class Blogpost extends Model {}

// Initializing the Blogpost model with attribute definitions
Blogpost.init(
  {
    // id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // title column
    title: {
      type: DataTypes.STRING,
      allowNull: false,
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
  },
  {
    sequelize, // Specifies the Sequelize instance
    timestamps: false, // Disables the automatic creation of 'createdAt' and 'updatedAt' columns
    freezeTableName: true, // Prevents Sequelize from pluralizing the table name
    underscored: true, // Converts camel-cased model names to underscored table names
    modelName: 'blogpost', // Sets the model name
  }
);

// Exporting the Blogpost model
module.exports = Blogpost;
