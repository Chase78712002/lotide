const assertEqual = require('./assertEqual');

const eqArrays = (arr1, arr2) => {
  let matchCount = 0;
  let longestArrLength;
  if(arr1.length > arr2.length) {
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

module.exports = eqArrays;
