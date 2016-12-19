const router = require("express").Router();
const Post = require('../models').Post;
const Comment = require('../models').Comment;
const Vote = require('../models').Vote;

//FUNCTION//
const getAllComments = (req,res) => (
	Comment.findAll()
)
.then(commentInfo => res.send(commentInfo))

function postComment (req,res) => {
	let body = req.body;
	Comment.
}

//ROUTES//
router.route('/')
	.get(getAllComments)

router.route('/:id')
	.post(postComment)

module.exports = router;