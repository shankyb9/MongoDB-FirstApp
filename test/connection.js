const mongoose = require('mongoose');

//ES6 Promise
mongoose.Promise = global.Promise // as default mongoose promise was depricated

//Connect to the database before tests run
before(function(done){   // a hook
  // Connect to MongoDB
  mongoose.connect('mongodb://localhost/testaroo');//asynchronous //means connecting to a mongodb database

  mongoose.connection.once('open',function(){  // listen to event once
    console.log('Connection has been made');
    done();
  }).on('error',function(){
    console.log('Connection error:',error);
  });

});

// Drop the characters collection before each tests
beforeEach(function(done){   // a hook
  //Drop the collection
  mongoose.connection.collections.mariochars.drop(function(){  // mariochars as mongoose pluralizes collections
    done();
  });
});
