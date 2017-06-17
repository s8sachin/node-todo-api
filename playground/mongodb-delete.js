
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log('Unable to connect mongoDB server.');
  }
  console.log('Connected to mongoDB server on port 27017.');

  // deleteMany
  db.collection('todos').deleteMany({text: "eat lunch"}).then((res) => {
    console.log(res);
  });

  // deleteOne
  db.collection('todos').deleteOne({text: "eat lunch"}).then((res) => {
    console.log(res);
  });

  // findOneAndDelete
  db.collection('todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result);
  });


  //delete many with name "Sanju"
  db.collection('users').deleteMany({name: "Sanju"}).then((res) => {
    console.log(res);
  });

  //delete one by id
  db.collection('users').findOneAndDelete({_id: new ObjectID("59452c1ee71a3344f7bed74f")}).then((res) => {
    console.log(res);
  });

  // db.close();  //not used for find or delete or update
});