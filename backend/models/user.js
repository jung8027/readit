"use strict"

module.exports = function(sequelize, DataTypes){
	var User = sequelize.define('User', {
		username: {type: DataTypes.STRING, unique: true, 
			validate: {notEmpty: true, 
				isUnique: function (value, next) {
                    var self = this;
                    User.find({where: {username: value}})
                        .then(function (user) {
                            // reject if a different user wants to use the same Username
                            if (user && self.id !== user.id) {
                                return next('Username already in use!');
                            }
                            return next();
                        })
                        .catch(function (err) {
                            return next(err);
                        });
                } }},
    password: {type: DataTypes.STRING, validate: {notEmpty: true}}
	}, {
    classMethods: {
      associate: function(models) {
      	//the model association name refers to the title of the table not the variable name
        User.hasMany(models.Post)
        User.hasMany(models.Comment)
        User.hasMany(models.Vote)
      }
    }
  });
	return User;
}