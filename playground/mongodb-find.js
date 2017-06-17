
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log('Unable to connect mongoDB server.');
  }
  console.log('Connected to mongoDB server on port 27017.');

  //find by obj id
  // db.collection('todos').find({
  //   _id: new ObjectID('59452a5770d4974371c4a076')
  // }).toArray().then((docs) => {
  //   console.log("Todos");
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log("Unable to fetch todos", err);
  // });

  // db.collection('todos').find().count().then((count) => {
  //   console.log("Todos");
  //   console.log(`Todos count ${count}`);
  // }, (err) => {
  //   console.log("Unable to fetch todos", err);
  // });

  //users with name sanju
  db.collection('users').find({name: 'Sanju'}).toArray().then((docs) => {
    console.log("Todos");
    console.log(docs);
  }, (err) => {
    console.log("Unable to fetch todos", err);
  });

  // db.close();
});

// query to find todos with false  // db.collection('todos').find({completed: false}).toArray().then((docs) => {
// mongodb docs 'cursor' for queries types.