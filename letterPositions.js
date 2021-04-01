// imported eqArrays and assertArraysEqual functions
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

const letterPositions = (sentence) => {
  const results = {};
  // update results
  return results;
};

// resulting obj should look like this ("lighthouse in the house") as arguement:
/* 
{
  l:[0],
  i:[1, 11],
  g:[2],
  h:[3, 5, 15, 18],
  t:[4, 14],
  o:[6, 19],
  u:[7, 20],
  s:[8, 21],
  e:[9, 16, 22],
  n:[12]
}
*/
// test with small string
assertArraysEqual(letterPositions('hello'), {h:[0], e:[1], l:[2,3], o:[4]});