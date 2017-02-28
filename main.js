let sonnets = require('./sonnets.js');




function wordFrequency(sonnets) {
  let puck = sonnets.split(" ");
  let juliet = {};
  puck.forEach( function romeo(each) {
    console.log(each);
  })


  // console.log('my stuff', puck);

  return juliet;
};

wordFrequency(sonnets);





// juliet.forEach( {
//   if juliet.includes(" ") {
//     //do something to delete or ignore this index
//   }
//   else let wordCount = new Object();




// let testRunner = require('./word-frequency-tests.js');
// testRunner(wordFrequency);
