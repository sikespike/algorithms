import 

const binarySearchMidPoint = (left, right) => {
  return Math.floor((right - left) / 2) + left;
};

const recursiveBinarySearchArray = (input, item, left, right) => {
  if (right < left) {
    return -1;
  } else {
    const mid = binarySearchMidPoint(left, right);

    if (input[mid] > item) {
      return recursiveBinarySearchArray(input, item, left, mid - 1);
    } else if (input[mid] < item) {
      return recursiveBinarySearchArray(input, item, mid + 1, right);
    } else {
      return mid;
    }
  }
};

const binarySearchArray = (input, item, sorted = false) => {
  if (!sorted) {
    input = quickSort(input);
  }

  return recursiveBinarySearchArray(input, item, 0, input.length - 1);
};


export default {
  quickSort,
  binarySearchArray,
};