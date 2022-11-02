const { before } = require("cypress/types/lodash");

function fizzbuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "fizzbuzz";
  } else if (num % 3 == 0) {
    return "fizz";
  } else if (num % 5 === 0) {
    return "buzz";
  }
}

let st = "hello";

function num() {
  return "hello";
}

describe("The test Fizzbuzz", () => {
  function expectedNumber(arr, expected) {
    arr.map((num) => {
      expect(fizzbuzz(num)).to.eq(expected);
    });
  }
  //    it.only() will run only specific suite that is given
  it.only("It Skip the specified suite of multiple of 3 and 5 both", () => {
    expectedNumber([30, 90, 15], "fizzbuzz");
  });

  //   it.skip() will skip the specific suite
  it.skip("return only buzz with multiple of 5 ", () => {
    expectedNumber([40, 10, 70], "buzz");
  });
  it("return to be fizz with mutiple of 3", () => {
    expectedNumber([18, 3, 12], "fizz");
  });
});
