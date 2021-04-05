// const assertEqual = require('../assertEqual');
const assert = require('chai').assert.strictEqual;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert(head([1, 2, 3]), 1);
  });

  it('returns "5" for ["5"]', () => {
    assert(head(['5']), '5');
  });

  it('returns 5 for [5,6,7]', () => {
    const actual = head([5,6,7]);
    const expected = 5;
    assert(actual,expected);
  });

  it('returns "Hello" for ["Hello", "Lighthouse", "Labs"]', () => {
    const actual = head(["Hello", "Lighthouse", "Labs"]);
    const expected = "Hello";
    assert(actual, expected);
  });

  it('returns undefined for []', () => {
    const actual = head([]);
    const expected = undefined;
    assert(actual, expected);
  });
});
