const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  // console.log appropriate message to the console
};

module.exports = assertObjectsEqual;

assertObjectsEqual({ a: '1', b: 2 },{ b: 2, a: '1' });

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd,dc);
