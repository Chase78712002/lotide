const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const countLetters = (sentence) => {
  // return a count for each letter in the sentence
    // the counts for each letter should return as an *object* with each letter as the key, and occurence as the value
  
  // 1. loop through the input and print out each letter
  // 2. since output is an object, let's declare an empty object first
  let output = {};
  // 3. add each letter as a key in the output object
      //3a. set each key's value as 1 first, return the output
  // 4. if key exists increment the count
        // else create the key value pair in the output with value as 1;
  for (const char of sentence) {
    if (output[char]) {
      output[char] += 1;
    } else {
      output[char] = 1;
    }
  }
  return output;
}

console.log(countLetters('Lighthouse'));