const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  let left;
  let right;

  if (array.length % 2 !== 0) {
    const half = (array.length - 1) / 2;
    left = array.slice(0, half + 1);
    right = array.slice(half + 1);
  } else {
    left = array.slice(0, array.length / 2);
    right = array.slice(array.length / 2);
  }

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];

  if (left.length === 1 && right.length === 1) {
    if (left[0] > right[0]) {
      result = [right[0], left[0]];
    } else {
      result = [left[0], right[0]];
    }

    return result;
  }

  let leftPointer = 0;
  let rightPointer = 0;

  while (leftPointer < left.length && rightPointer < right.length) {
    if (left[leftPointer] > right[rightPointer]) {
      result.push(right[rightPointer]);

      if (rightPointer === right.length - 1) {
        result = [...result, ...left.slice(leftPointer)];
        break;
      }

      rightPointer++;
    } else {
      result.push(left[leftPointer]);

      if (leftPointer === left.length - 1) {
        result = [...result, ...right.slice(rightPointer)];
        break;
      }

      leftPointer++;
    }
  }

  return result;
}

const answer = mergeSort(numbers);
console.log(answer);
