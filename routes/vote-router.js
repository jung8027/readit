const router = require("express").Router();
//const Post = require('../models').Post;
//const Comment = require('../models').Comment;
const Vote = require('../models').Vote;

//FUNCTION//
const getAllVotes = (req,res) => (
	Vote.findAll()
)
.then(voteInfo => res.send(voteInfo))

// function postVote (req,res) => (
// 	Comment.
// )

//ROUTES//
router.route('/')
	.get(getAllVotes)
//	.post(postVote)

module.exports = router;