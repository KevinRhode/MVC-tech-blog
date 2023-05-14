const router = require('express').Router();
const { Blogpost,User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/create',withAuth,async (req,res) =>{
  try {
    res.render('createBlogpost', {
      layout:'dash',
      logged_in: req.session.logged_in
    });
  }catch(err){
    res.status(500).json(err);
  }
});

router.get('/:id',withAuth,async(req,res)=>{
  try {
    const blogpostData = await Blogpost.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const blogpost = blogpostData.get({ plain: true });

    res.render('createBlogpost', {
      ...blogpost,
      layout:'dash',
      logged_in: req.session.logged_in
    });
  }catch(err){
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newBlogpost = await Blogpost.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlogpost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/edit/:id',withAuth, async (req,res)=>{
  try {
    const updatedBlogpost = await Blogpost.update({
      ...req.body
    },
    {
      where:{id:req.params.id}
    });
    res.status(200).json(updatedBlogpost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blogpostData = await Blogpost.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
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

module.exports = router;
