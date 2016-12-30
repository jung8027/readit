"use strict"

module.exports = function(sequelize, DataTypes){
	var Vote = sequelize.define('Vote', {
		Vote: DataTypes.INTEGER
	}, {
    classMethods: {
      associate: function(models) {
      	//the model association name refers to the title of the table not the variable name
        Vote.belongsTo(models.User)
        Vote.belongsTo(models.Post, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        })
      }
    }
  });
	return Vote;
}