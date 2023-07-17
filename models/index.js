// Importing the required models
const User = require('./User');
const Blogpost = require('./Blogpost');
const Comment = require('./Comment');

// Defining associations between User and Blogpost models
User.hasMany(Blogpost, {
  foreignKey: 'user_id', // Specifies the foreign key column in the Blogpost model
  onDelete: 'CASCADE' // Specifies the cascading deletion behavior
});

// Defining associations between User and Comment models
User.hasMany(Comment, {
  foreignKey: 'user_id', // Specifies the foreign key column in the Comment model
  onDelete: 'CASCADE' // Specifies the cascading deletion behavior
});

// Defining associations between Blogpost and User models
Blogpost.belongsTo(User, {
  foreignKey: 'user_id' // Specifies the foreign key column in the Blogpost model
});

// Defining associations between Blogpost and Comment models
Blogpost.hasMany(Comment, {
  foreignKey: 'blogpost_id' // Specifies the foreign key column in the Comment model
});

// Defining associations between Comment and User models
Comment.belongsTo(User, {
  foreignKey: 'user_id' // Specifies the foreign key column in the Comment model
});

// Defining associations between Comment and Blogpost models
Comment.belongsTo(Blogpost, {
  foreignKey: 'blogpost_id' // Specifies the foreign key column in the Comment model
});

// Exporting the models
module.exports = { User, Blogpost, Comment };
