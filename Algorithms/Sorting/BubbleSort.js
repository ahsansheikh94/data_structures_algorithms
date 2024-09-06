const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  let result = array;
  let sorted = 0;

  for (let i = 0; i < array.length; i++) {
    let firstPointer = 0;
    let secondPointer = 1;
    while (secondPointer < result.length - sorted) {
      if (result[secondPointer] < result[firstPointer]) {
        const temp = result[secondPointer];
        result[secondPointer] = result[firstPointer];
        result[firstPointer] = temp;
      }
      firstPointer++;
      secondPointer++;
    }
    sorted++;
  }

  return result;
}

console.log(bubbleSort(numbers));
