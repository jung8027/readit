const User = require('../models').User;
const express = require('express');
const router = express.Router();

const logInUser = (req, res) => {
  console.log('Session:', req.session);
  let userInfo = req.body;
  console.log('userInfo', userInfo)
  User.sync()
  //check if user exists
  .then(() => {
    return User.findOne({
      where: {
        username: userInfo.username
      }
    })
  })
  .then((user) => {
    //IF user exists, check if password is correct
    if(user && user.password === userInfo.password) {
      console.log('Password is correct!')
      return user;
    //ELSE IF user does not exist, create new user
    } else if(!user) {
      console.log('User does not exist!');
      // return User.create(userInfo)
    } else {
      return null;
    }
  })
  .then((user) => {
    if(user) {
      console.log('user found', user)
      req.session.user = {username: user.username, id: user.id};
      req.session.save();
      console.log('Updated session?', req.session);
      res.send(user);
    } else {
      res.send('Incorrect password or username!');
    }
  })
};

const checkUserSession = (req,res)=>{
  if(req.session.user) {
    console.log('check session', req.session)
    res.send(req.session.user);
  } else {
    res.send(null);
  }
};

const logOutUser = (req,res) => {
  if(req.session.user){
    req.session.destroy()
    console.log('logged out')
  }
}

//ROUTES//
router.route('/')
  .post(logInUser)
  .get(checkUserSession)
  .delete(logOutUser)

module.exports = router