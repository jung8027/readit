const router = require("express").Router();
const Post = require('../models').Post;
const Comment = require('../models').Comment;
const Vote = require('../models').Vote;


//FUNCTIONS//
const getAllPosts = (req,res) => (
	Post.findAll({
		include: [
		  {model: Comment}, {model: Vote}
		]
	})
)
.then((postsInfo)=>
	res.send(postsInfo)
)

const getOnePost = (req,res) => (
	Post.findOne({
		where: {id: req.params.id},
		include: [
		  {model: Comment}, {model: Vote}
		]
	})
)
.then((postInfo)=>
	res.send(postInfo)
)

const postPost = (req,res) => {
	let body = req.body;
	console.log('testing post');
	Post.create({
		title: body.title,
		body: body.body
	})
	.then(()=>
		res.send('Post name '+body.title+' created!')
	)
}

const deletePost = (req,res)=> (
	console.log('destroy test')
	// Post.destroy()
) 

//ROUTES//
router.route('/')
	.get(getAllPosts)
	.post(postPost)

router.route('/:id')
	.get(getOnePost)
	.delete(deletePost)

module.exports = router;