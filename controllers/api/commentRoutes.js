const router = require('express').Router();
const { Blogpost,User,Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req,res)=>{

});
router.post('/',async (req,res)=>{
    try {
        const comment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(comment);

    } catch (err) {
        res.status(400).json(err);
    }
   

});

module.exports = router;