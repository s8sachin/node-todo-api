var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// mongoose model
var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// create a record using mongoose

// var newTodo = new Todo({
//   text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save');
// });

var otherTodo = new Todo({
  text: "  saachi    "
});

otherTodo.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to save', e);
});

// User model
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minLength: 1
  }
});

var user = new User({
  email: " sachin@gmail.com  "
});

user.save().then((doc) => {
  console.log('Saved User', doc);
}, (e) => {
  console.log(e);
});