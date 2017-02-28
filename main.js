let sonnets = require('./sonnets.js');




function wordFrequency(sonnets) {
  let puck = sonnets.split(" ");
  let juliet = {};
  puck.forEach(function romeo(eachWord) {
    // console.log(eachWord);
    if (juliet[eachWord] >= 1) {
      juliet[eachWord] = juliet[eachWord] + 1;
    }
    else {
    juliet[eachWord] = 1;
    }
  })


  // console.log('my stuff', puck);

  return juliet;
};

let cats = wordFrequency('cats are awesome and are soft');
console.log(cats);




// juliet.forEach( {
//   if juliet.includes(" ") {
//     //do something to delete or ignore this index
//   }
//   else let wordCount = new Object();




// let testRunner = require('./word-frequency-tests.js');
// testRunner(wordFrequency);
