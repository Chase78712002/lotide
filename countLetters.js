const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const countLetters = (sentence) => {
  // return a count for each letter in the sentence
    // the counts for each letter should return as an object with each letter as the key, and occurence as the value
  // 1. loop through the input and print out each letter
  for (const char of sentence) {
    console.log(char);
  }
}

console.log(countLetters('LHL'));