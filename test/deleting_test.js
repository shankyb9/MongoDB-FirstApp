
const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe tests
describe('Deleting records', () => {

var char;

  beforeEach(function(done){
      char = new MarioChar({
      name : 'Mario'
    });

      char.save().then(function(){
        //assert(char.isNew === false);// to check that char is not new and has been saved in the database
        done();
      }); // asynchronous operation

  });


  // Create tests
  it('Deletes one record from the database',function(done){

    MarioChar.findOneAndRemove({name:'Mario'}).then(function(){
      MarioChar.findOne({name: 'Mario'}).then(function(result){
        assert(result === null);
      });
      done();
    });

  });




});
