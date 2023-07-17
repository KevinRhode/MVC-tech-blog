// Importing required modules and models
const router = require('express').Router();
const { Blogpost, User } = require('../../models');
const withAuth = require('../../utils/auth');

// Route for rendering the blog post creation form
router.get('/create', withAuth, async (req, res) => {
  try {
    res.render('createBlogpost', {
      layout: 'dash', // Specifies the layout for the rendered view
      logged_in: req.session.logged_in, // Passes the logged_in status to the view
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route for fetching and rendering a specific blog post
router.get('/:id', withAuth, async (req, res) => {
  try {
    const blogpostData = await Blogpost.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'], // Includes the 'name' attribute from the User model
        },
      ],
    });

    const blogpost = blogpostData.get({ plain: true });

    res.render('createBlogpost', {
      ...blogpost,
      layout: 'dash',
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route for creating a new blog post
router.post('/', async (req, res) => {
  try {
    const newBlogpost = await Blogpost.create({
      ...req.body,
      user_id: req.session.user_id, // Assigns the current user's ID to the blog post's user_id
    });

    res.status(200).json(newBlogpost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route for updating an existing blog post
router.put('/edit/:id', withAuth, async (req, res) => {
  try {
    const updatedBlogpost = await Blogpost.update(
      {
        ...req.body,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.status(200).json(updatedBlogpost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route for deleting a blog post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blogpostData = await Blogpost.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id, // Ensures that only the owner of the blog post can delete it
      },
    });

    if (!blogpostData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(blogpostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Exporting the router module
module.exports = router;
