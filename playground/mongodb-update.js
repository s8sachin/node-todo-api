
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log('Unable to connect mongoDB server.');
  }
  console.log('Connected to mongoDB server on port 27017.');

  // findOneAndUpdate - todos
  db.collection('todos').findOneAndUpdate({
    _id: new ObjectID("59457fd3b3d0c9266656089b")
  }, {
    set: { // update operators mongodb
      completed: true
    }
  }, {
      returnOriginal: false
    }).then((result) => {
    console.log(result);
  });

  // findOneAndUpdate - users
  db.collection('users').findOneAndUpdate({
    _id: new ObjectID("59458ec9b3d0c92666560dfe")
  }, {
    $set: { 
      name: "Shiva"
    }, $inc: {
      age: 5
    }
  }, {
      returnOriginal: false
    }).then((result) => {
    console.log(result);
  });

  // db.close();  //not used for find or delete or update
});