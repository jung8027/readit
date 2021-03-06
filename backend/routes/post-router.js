const router = require("express").Router();
const Post = require('../models').Post;
const Comment = require('../models').Comment;
const Vote = require('../models').Vote;
const User = require('../models').User;


//FUNCTIONS//
const getAllPosts = (req,res) => (
	Post.findAll({
		include: [
		  {model: Comment,
		  	include: [{model: User}]
		  },
		  {model: Vote}
		]
	})
)
.then((postsInfo)=>
	res.send(postsInfo)
)

const getOnePost = (req,res) => (
	Post.findOne({
		where: {id: req.params.PostId},
		include: [
		  {model: Comment,
		  	include: [{model: User}]
		  }, 
		  {model: Vote}
		]
	})
)
.then((postInfo)=>
	res.send(postInfo)
)

const createPost = (req,res) => {
	let body = req.body;
	Post.create({
		title: body.title,
		body: body.body,
		UserId: body.UserId
	})
	.then(()=>
		res.send('Post name '+body.title+' created!')
	)
}

const deletePost = (req,res)=> (
	Post.destroy({
		where: {id: req.params.PostId}
	})
)
.then(()=>res.send('Post with id: '+req.params.PostId+' deleted!'))

//ROUTES//
router.route('/')
	.get(getAllPosts)
	.post(createPost)  //

router.route('/:PostId')
	.get(getOnePost)
	.delete(deletePost)

module.exports = router;