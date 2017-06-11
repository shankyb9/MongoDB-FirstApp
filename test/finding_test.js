
const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe tests
describe('Finding records', () => {

var char;

  beforeEach(function(done){   // a hook
      char = new MarioChar({
      name : 'Mario'
    });

      char.save().then(function(){
        //assert(char.isNew === false);// to check that char is not new and has been saved in the database
        done();
      }); // asynchronous operation

  });


  // Create tests
  it('Finds one record from the database',function(done){

    MarioChar.findOne({name: 'Mario'}).then(function(result){
      assert(result.name === 'Mario');
      done();
    });

  });


  it('Finds one record by ID from the database',function(done){

    MarioChar.findOne({_id: char._id}).then(function(result){
      assert(result.id.toString() === char._id.toString());
      done();
    });

  });

});
