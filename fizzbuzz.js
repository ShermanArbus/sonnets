function fizzbuzz(x) {
  let cats = [];
  for (var i = 0; i < x; i++) {
     console.log(i);
     let output;
    if (i % 3 === 0) {

    } else if (i % 5 === 0) {
      output = "buzz";
    }
    cats.push(output);

};
console.log(cats);

}

fizzbuzz(20);





















//
//
// let testRunner = require('./fizzbuzz-tests.js');
// testRunner(fizzBuzz);
