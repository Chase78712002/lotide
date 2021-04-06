// const assertArraysEqual = require('../assertArraysEqual') ;
const middle = require('../middle');
const assert = require('chai').assert.deepEqual;

describe("#middle", () => {

  it("returns [2] for [1, 2, 3]", () => {
    const actual = middle([1, 2, 3]);
    const expected = [2];
    assert(actual, expected);
  });

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    const actual = middle([1, 2, 3, 4, 5]);
    const expected = [3];
    assert(actual, expected);
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    const actual = middle([1, 2, 3, 4]);
    const expected = [2, 3];
    assert(actual, expected);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    const actual = middle([1, 2, 3, 4, 5, 6]);
    const expected = [3, 4];
    assert(actual, expected);
  });

  it("returns [] for [1, 2,]", () => {
    const actual = middle([1, 2]);
    const expected = [];
    assert(actual, expected);
  });
});