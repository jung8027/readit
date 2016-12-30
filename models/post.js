"use strict"

module.exports = function(sequelize, DataTypes){
	var Post = sequelize.define('Post', {
		title: DataTypes.STRING,
    body: DataTypes.STRING
	}, {
    classMethods: {
      associate: function(models) {
      	//the model association name refers to the title of the table not the variable name
        Post.belongsTo(models.User)
        Post.hasMany(models.Comment)
        Post.hasMany(models.Vote)
      }
    }
  });
	return Post;
}