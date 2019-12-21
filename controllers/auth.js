const jwt = require("jsonwebtoken");
const model = require("../models");
const user = model.users;

exports.login = (req, res) => {
 ///check if email and pass match in database
 const email = req.body.email;
 const password = req.body.password;
 user.findOne({where: {email, password}}).then(user => {
  if (user) {
   const token = jwt.sign({id: user.id}, "bakamono");
   res.send({user, token});
  } else {
   res.send({
    error: true,
    message: " wrong email or password!!"
   });
  }
 });
};

exports.register = (req, res) => {
 // check if email in database if match
};
