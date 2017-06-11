// const mocha = require('mocha');
// const assert = require('assert');
//
// // Describe tests
// describe('(some demo tests)', () => {
//   // Create tests
//   it('add two numbers together',function(){
//     assert(2 + 3 === 5);
//   });
// });


//const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe tests
describe('Saving records', () => {
  // Create tests
  it('Saves record to the database',function(done){

    var char = new MarioChar({
      name : 'Mario'
    });

      char.save().then(function(){
        assert(char.isNew === false);// to check that char is not new and has been saved in the database
        done();
      }); // asynchronous operation


  });

// new test

});
