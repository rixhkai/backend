"use strict";

const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
 const users = sequelize.define(
  "users",
  {
   username: DataTypes.STRING,
   password: {
    type: DataTypes.STRING,
    allowNull: false
   },
   fullname: DataTypes.STRING,
   email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
     isEmail: true
    }
   },
   is_active: DataTypes.BOOLEAN
  },
  {}
 );

 //  users.prototype.validPassword = function(password) {
 //   return bcrypt.compareSync(password, this.password);
 //  };

 //  users.hook("beforeCreate", function(user) {
 //   user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
 //  });
 users.associate = function(models) {
  // associations can be defined here
 };
 return users;
};
