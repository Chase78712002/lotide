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

const without = (source, itemsToRemove) => {
  // remove itemsToRemove from source
  // newArray should not modify the original
  // loop through source array
  // loop through itemsToRemove
  // if source item === itemToRemove
  // newArray.push(source item)
  // end if
  // end loop
  let newArray = source.slice();
  for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (newArray[i] === itemsToRemove[j]) {
        newArray.splice(i, 1);
      }
    }
  }
  return newArray;
};

assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without([5, 8, 9], [1, 2, 8, 11, 32, 33, 9]), [5]);
assertArraysEqual(without(["This", 1, "one", 1, "is", "hundred", "tough"], [1, "hundred"]), ["This", "one", "is", "tough"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);