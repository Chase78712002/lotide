const eqArrays = require('./eqArrays');

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
        let val1 = obj1[key1];
        let val2 = obj2[key2];
        if (Array.isArray(val1) && Array.isArray(val2)) {
          if(key1 === key2 && eqArrays(val1, val2)) {
            count++;
          }
        } else {
          if (key1 === key2 && val1 === val2) {
            count++;
          }
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

module.exports = eqObjects;


