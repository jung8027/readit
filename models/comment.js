"use strict"

module.exports = function(sequelize, DataTypes){
	var Comment = sequelize.define('Comment', {
		comment: DataTypes.STRING
	}, {
    classMethods: {
      associate: function(models) {
      	//the model association name refers to the title of the table not the variable name
        Comment.belongsTo(models.Post, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        })
      }
    }
  });
	return Comment;
}