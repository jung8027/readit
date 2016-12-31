const router = require("express").Router();
const Post = require('../models').Post;
const Comment = require('../models').Comment;
const Vote = require('../models').Vote;
const User = require('../models').User;




//FUNCTIONS//
const getAllUsers = (req,res) => (
	User.findAll({
		include: [
		  {model: Comment}, {model: Vote}, {model: Post}
		]
	})
)
.then((usersInfo)=>
	res.send(usersInfo)
)

const getOneUser = (req,res) => (
	User.findOne({
		where: {id: req.params.UserId},
		include: [
		  {model: Comment}, {model: Vote}, {model: Post}
		]
	})
)
.then((userInfo)=>
	res.send(userInfo)
)

const createUser = (req,res) => {
	let body = req.body;
	User.create({
		username: body.username,
		password: body.password
	})
	.then(()=>
		res.send(body.username+' created!'))
	.catch((err) =>{
            // respond with validation errors
            res.status(422).send(err.errors[0].message);
        })
  .catch((err)=> {
      // every other error
      res.status(400).send({
          message: err.message
      });
    })
}

const deleteUser = (req,res)=> (
	User.destroy({
		where: {id: req.params.UserId}
	})
)
.then((userInfo)=>res.send(PostId+' deleted!'))

//ROUTES//
router.route('/')
	.get(getAllUsers)
	.post(createUser)  //

router.route('/:UserId')
	.get(getOneUser)
	.delete(deleteUser)

module.exports = router;