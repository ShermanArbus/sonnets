function fizzBuzz(x) {
  let cats = [];
  for (let i = 1; i <= x; i++) {
    //  console.log(i);
     let output;
     if (i % 3 === 0 && i % 5 === 0) {
      output = "fizzbuzz";
    } else if (i % 5 === 0) {
      output = "buzz";
    } else if (i % 3 === 0 ){
      output = "fizz";
    } else {
      output = i;
    }
    cats.push(output);
  }
  console.log(cats);
  return cats;
}

fizzBuzz(50);























let testRunner = require('./fizzbuzz-tests.js');
testRunner(fizzBuzz);
