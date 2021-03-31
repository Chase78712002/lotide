const eqArrays = (arr1, arr2) => {
  let matchCount = 0;
  for (let index in arr1) {
    if (arr1[index] === arr2[index]) {
      matchCount++;
    }
  }
  if (matchCount === arr1.length) {
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

const middle = (array) => {
  let midEle = [];
  const midIndex = Math.floor(array.length / 2);
  // return the middle-most elements in the array
  // if only 1 or 2 elements in an array
  // return empty arrays
  if (array.length < 3) {
    return midEle;
  } else if (array.length % 2 !== 0) {
    midEle.push(array[midIndex]);
    return midEle;
  } else if (array.length % 2 === 0) {
    midEle.push(array[midIndex - 1]);
    midEle.push(array[midIndex]);
    return midEle;
  }
};

// test with assertArraysEqual

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2]), []);
