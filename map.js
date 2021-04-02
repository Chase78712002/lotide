const map = (array, callback) => {
  // declare new array as empty
  const newArray = [];
  // loop through the array
  // call the callback function
    // push the result to the new array
  // return new array
  return newArray;
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

