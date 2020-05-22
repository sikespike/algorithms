import { quickSort } from '../sort/quickSort';

const binarySearchMidPoint = (left, right) => Math.floor((right - left) / 2) + left;

const recursiveBinarySearchArray = (input, item, left, right) => {
  const mid = binarySearchMidPoint(left, right);

  if (input[mid] === item) {
    return mid;
  } else if (input[mid] < item) {
    return recursiveBinarySearchArray(input, item, mid + 1, right);
  } else {
    return recursiveBinarySearchArray(input, item, left, mid - 1);
  }
};

const binarySearchArray = (input, item) => recursiveBinarySearchArray(input, item, 0, input.length - 1);

export default {
  binarySearchArray,
};
