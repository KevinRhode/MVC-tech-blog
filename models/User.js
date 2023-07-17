// Importing the required modules from Sequelize and bcrypt
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

// Importing the Sequelize instance (connection to the database)
const sequelize = require('../config/connection');

// Defining the User model by extending the Sequelize Model class
class User extends Model {
  // Method to check if a provided password matches the user's hashed password
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// Initializing the User model with attribute definitions
User.init(
  {
    // id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // name column
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // email column
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, // Validates that the value is in email format
      },
    },
    // password column
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8], // Validates that the password is at least 8 characters long
      },
    },
  },
  {
    hooks: {
      // Hashing the password before creating a new user
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      // Hashing the password before updating an existing user
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    sequelize, // Specifies the Sequelize instance
    timestamps: false, // Disables the automatic creation of 'createdAt' and 'updatedAt' columns
    freezeTableName: true, // Prevents Sequelize from pluralizing the table name
    underscored: true, // Converts camel-cased model names to underscored table names
    modelName: 'user', // Sets the model name
  }
);

// Exporting the User model
module.exports = User;
