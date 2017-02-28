let sonnets = require('./sonnets.js');




function wordFrequency(sonnets) {
  let puck = sonnets.split(" ");
  let juliet = {};
  puck.forEach(function romeo(eachWord) {
    if (juliet[eachWord] >= 1) {
      juliet[eachWord] = juliet[eachWord] + 1;
    }
    else {
    juliet[eachWord] = 1;
    }
  })


  return juliet;
};

let macbeth = wordFrequency(sonnets);
console.log(macbeth);




let testRunner = require('./word-frequency-tests.js');
testRunner(wordFrequency);
