const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = (obj1, obj2) => {
  // check if they have the same number of keys
  numKeysObj1 = Object.keys(obj1).length;
  numKeysObj2 = Object.keys(obj2).length;
  if (numKeysObj1 === numKeysObj2) {
    // 1st condition met
    // check if the key:value pair in obj1 is the same as key:value pair in obj2
    // loop through the both objs as nested loop to see if they have matched pairs
    let count = 0;
    for (const key1 in obj1) {
      for (const key2 in obj2) {
        if (key1 === key2 && obj1[key1] === obj2[key2]) {
          count++;
        }
      }
    }
    if (count === numKeysObj1) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }

}

// Test prmitives as values
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true);
// eqObjects(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);
// eqObjects(ab, abc); // => false

// Test arrays as values
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);
eqObjects(cd, cd2); // => false