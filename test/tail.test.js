const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it('returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    const actual = tail(["Yo Yo", "Lighthouse", "Labs"]);
    const expected = ["Lighthouse", "Labs"];
    assert.deepEqual(actual, expected);
  });

  it('returns [2,3,4,5] for [1,2,3,4,5]', () => {
    const actual = tail([1,2,3,4,5]);
    const expected = [2,3,4,5];
    assert.deepEqual(actual, expected);
  });
});
