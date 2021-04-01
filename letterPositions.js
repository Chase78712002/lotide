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
  // loop through the string and create key:value pair for each letter 
  // access the letter's index position number and the letter itself

  for (let i = 0; i < sentence.length; i++) {
    console.log(sentence[i]);
    console.log(i);
  }
  // value needs to be the index positions of that letter, and should be an array
  //
  return results;
};
console.log(letterPositions("hello"));
/*
results for "hello"
{
  h:[0],
  e:[1],
  l:[2,3], 
  o:[4]
}
*/
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
// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions('hello'), {h:[0], e:[1], l:[2,3], o:[4]});