const middle = (array) => {
  let midEle = [];
  const midIndex = Math.floor(array.length / 2);
  // return the middle-most elements in the array
  // if only 1 or 2 elements in an array
  // return empty arrays
  if (array.length < 3) {
    return midEle;
  } else if (array.length % 2 !== 0) {
    midEle.push(array[midIndex]);
    return midEle;
  } else if (array.length % 2 === 0) {
    midEle.push(array[midIndex - 1]);
    midEle.push(array[midIndex]);
    return midEle;
  }
};

module.exports = middle;