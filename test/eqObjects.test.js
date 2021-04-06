const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  it('returns true for cd = { c: "1", d: ["2", 3] } and dc = { d: ["2", 3], c: "1" }', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    const actual = eqObjects(cd, dc);
    const expected = true;
    assert.strictEqual(actual, expected);
  });

  it('returns false for cd = { c: "1", d: ["2", 3] } and cd2 = { c: "1", d: ["2", 3, 4] }', () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    const actual = eqObjects(cd, cd2);
    assert.isFalse(actual);
  });

});