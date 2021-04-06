const eqArrays = (arr1, arr2) => {
  let matchCount = 0;
  let longestArrLength;
  if (arr1.length > arr2.length) {
    longestArrLength = arr1.length;
  } else {
    longestArrLength = arr2.length;
  }
  for (let index in arr1) {
    if (arr1[index] === arr2[index]) {
      matchCount++;
    }
  }
  if (matchCount === longestArrLength) {
    return true;
  } else {
    return false;
  }
};
const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const map = (array, callback) => {
  // declare new array as empty
  const newArray = [];
  // loop through the array, and log them
  for (let item of array) {
    // call the callback function
    // push the result to the new array
    newArray.push(callback(item));
  }
  // return new array
  return newArray;
};

module.exports = map;

const words = ["ground", "control", "to", "major", "tom"];
const strings = ['the', 'second', 'letter', 'of', 'the', 'word', 'will', 'be', 'printed'];

const results1 = map(words, word => word[0]);
const results2 = map(['Spring', 'Interval', 'Training'], word => word[0]);
const results3 = map(strings, word => word[1]);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, ['S', 'I', 'T']);
assertArraysEqual(results3, ['h','e','e','f','h','o','i','e','r']);