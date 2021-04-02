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
const takeUntil = (array, callback) => {
  // declare an empty result array
  let result = [];
  // loop through the array
  for (let elem of array) {
    // push current item to the result array
    // unless callback returns true
    if (!callback(elem)) {
      result.push(elem);
    } else {
      // return a result array
      return result;
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);
