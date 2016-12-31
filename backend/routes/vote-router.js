const router = require("express").Router();
const Post = require('../models').Post;
//const Comment = require('../models').Comment;
const Vote = require('../models').Vote;

//FUNCTION//
const getAllVotes = (req,res) => (
	Vote.findAll()
)
.then(voteInfo => res.send(voteInfo))

const addVote = (req,res) => {
	let body = req.body;
	Post.findOne({
		where: {id: body.PostId}
	})
	.then(postInfo => {
		Vote.create({
			PostId: postInfo.dataValues.id,
			Vote: 1
		})
		.then(voteInfo => res.send(voteInfo))
	})
}

const removeVote = (req,res) => {
	let body = req.body;
	Post.findOne({
		where: {id: body.PostId},
		include: [ 
		  {model: Vote} 
		]
	})
	.then(postInfo => {
		Vote.destroy({
			where: 
			  {id: postInfo.Votes[0].dataValues.id} 
		})
		.then(voteInfo => res.send('vote has been removed'))
	})
}

//ROUTES//
router.route('/')
	.get(getAllVotes)
	.post(addVote) //needs PostId
	.delete(removeVote)

module.exports = router;