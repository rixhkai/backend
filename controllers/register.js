const conn = require("../db");

exports.register = (req, res) => {
 const today = new Date();
 const users = {
  username: req.body.username,
  email: req.body.email,
  password: req.body.password,
  fullname: req.body.fullname,
  createdAt: today,
  updatedAt: today
 };
};
