const router = require('express').Router();
const { Blogpost, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all blogposts and JOIN with user data
    const blogpostData = await Blogpost.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      //   {
      //     model: Comment,
      //   },
      ],
    });

    // Serialize data so the template can read it
    const blogposts = blogpostData.map((blogpost) => blogpost.get({ plain: true }));

    // Pass serialized data and session flag into template
    if (req.
      session.logged_in) {
      res.render('homepage', { 
        layout:'main-auth',
        blogposts, 
        logged_in: req.session.logged_in 
      });
    }else{
      res.render('homepage', { 
        blogposts, 
        logged_in: req.session.logged_in 
      });
    }
   
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/blogpost/:id',withAuth, async (req, res) => {
  try {
    const blogpostData = await Blogpost.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        // {
        //   model:Comment,
        //   attributes: ['description'],
        // }
      ],
    });

    const blogpost = blogpostData.get({ plain: true });
    console.log(blogpost);
    res.render('commentBlogpost', {
      layout:'main-comment',
      ...blogpost,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
    //once customer has decided on design alerts will be removed
    alert(json(err));
  }
});

router.get('/blogpost/view/:id',withAuth, async (req, res) => {
  try {
    const blogpostData = await Blogpost.findByPk(req.params.id, {
      include: [
        {
          model:User,
          attributes:['name']
        },
        
        {
          model:Comment,
          // attributes:['user_id','description'],
          include:[{
            model:User,
            attributes:['name']
        }]
          
        },
        
      ],
    });
    // const comments = await Comment.findAll({where:{blogpost_id:req.params.id}},{include:[{model:User, attributes:['name']}]});
    

    const blogpost = blogpostData.get({ plain: true });
    // const comment= comments.map((comment)=> comment.get({plain:true}))
    res.render('viewBlogpost', {
      layout:'main-comment',
      ...blogpost,
      // comment,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Blogpost}],
    });

    const user = userData.get({ plain: true });
    
    res.render('dashboard', {
      layout:'dash',
      ...user,
      logged_in: true
    });
    // const blogpostData = await Blogpost.findAll({
    //   include: [
    //     {
    //       model: User,
    //       attributes: ['name'],
    //     },
    //   ],
    // });

    // // Serialize data so the template can read it
    // const blogposts = blogpostData.map((blogpost) => blogpost.get({ plain: true }));

    // // Pass serialized data and session flag into template
    // res.render('homepage', { 
    //   blogposts, 
    //   logged_in: req.session.logged_in 
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});
router.get('/sign-up', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('signup');
});
router.get('/login/:option', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  if (req.params.option) {
   return  res.render('login');
  }

  return res.render('login');
});


module.exports = router;
