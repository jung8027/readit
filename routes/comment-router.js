const router = require("express").Router();
const Post = require('../models').Post;
const Comment = require('../models').Comment;
const Vote = require('../models').Vote;

//FUNCTION//
const getAllComments = (req,res) => (
	Comment.findAll()
)
.then(commentInfo => res.send(commentInfo))

const deleteComment = (req,res) => (
	Comment.destroy({
		where: {id: req.params.CommentId}
	})
)
.then(()=>res.send('Comment with id: '+req.params.PostId+' deleted!'))

const postComment = (req,res) => {
	let body = req.body;
	Comment.create({
		PostId: body.PostId,
		comment: body.comment
	})
	.then(commentInfo => res.send(commentInfo))
}

//ROUTES//
router.route('/')
	.get(getAllComments)
	.post(postComment) // needs PostId and comment

router.route('/:CommentId')
	.delete(deleteComment)

module.exports = router;