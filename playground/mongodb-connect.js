// const MongoClient = require('mongodb').MongoClient;

//object destructring es6
// var user = {name: "sachin", age: 25};
// var {name} = user;
// console.log(name);
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID(); //custom obj id
// console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log('Unable to connect mongoDB server.');
  }
  console.log('Connected to mongoDB server on port 27017.');

  db.collection('todos').insertOne({
    text: "Something to do",
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  // Insert new doc into Users (name, age, location)

  db.collection('users').insertOne({
    name: "Sanju",
    age: 16,
    location: "Mysore"
  }, (err, result) => {
    if (err) {
      return console.log("Unable to insert user", err);
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
  })

  db.close();
});