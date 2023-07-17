const router = require('express').Router();
const { User } = require('../../models');

// Route for user registration
router.post('/', async (req, res) => {
  try {
    // Create a new user with the provided request body
    const userData = await User.create(req.body);

    req.session.save(() => {
      // Set up a user session
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route for user login
router.post('/login', async (req, res) => {
  try {
    // Find a user by the provided email
    const userData = await User.findOne({ where: { name: req.body.email } });

    if (!userData) {
      // If user does not exist, return an error message
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Check if the provided password is valid
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      // If password is incorrect, return an error message
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      // Set up a user session
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route for user logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    // If user is logged in, destroy the session
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    // If user is not logged in, return a 404 error
    res.status(404).end();
  }
});

module.exports = router;
