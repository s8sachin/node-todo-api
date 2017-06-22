const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result) => {
  console.log(result);
});

// Todo.findOneAndRemove
Todo.findByIdAndRemove('594c08b0f0ba5f3054693e5c').then((todo) => {
  console.log(todo);
});
// Todo.findByIdAndRemove

Todo.findByIdAndRemove('594c08b0f0ba5f3054693e5c').then((todo) => {
  console.log(todo);
});