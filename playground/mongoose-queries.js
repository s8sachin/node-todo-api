const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '594812d50c190319aed2e497';

if (!ObjectID.isValid(id)){
  console.log('ID not valid');
}
// can find obj id as string in mongoose (in mongo query .. it needs to be converted to ObjectId)
// array of matching objects
Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});

// single object
Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo);
});

// find by Id
Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('Todo by id', todo);
}).catch((e) => console.log(e));

// User
// user not found, user found, error
User.findById(id).then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log('User', user);
}).catch((e) => console.log(e));