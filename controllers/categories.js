const models = require("../models");
const todo = models.categories;

exports.index = (req, res) => {
 console.log("get all categories");
 todo
  .findAll()
  .then(some => res.send(some))
  .catch(err => res.send(err));
};

exports.show = (req, res) => {
 console.log("get specific one");
 todo.findOne({id: req.params.id}).then(some => res.send(some));
};

exports.store = (req, res) => {
 todo.create(req.body).then(some => {
  res
   .send({
    message: "success",
    some
   })
   .catch(err => res.send(err));
 });
};
