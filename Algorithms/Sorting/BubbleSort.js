const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  let result = array;
  // Keep track of items we moved to right
  let sorted = 0;

  for (let i = 0; i < array.length; i++) {
    // The 2 Pointers
    let firstPointer = 0;
    let secondPointer = 1;
    while (secondPointer < result.length - sorted) {
      // Check if we need to swap and swap if needed
      if (result[secondPointer] < result[firstPointer]) {
        const temp = result[secondPointer];
        result[secondPointer] = result[firstPointer];
        result[firstPointer] = temp;
      }
      // Increment both pointers
      firstPointer++;
      secondPointer++;
    }
    // By now, we have sorted an element, so let's increment that.
    sorted++;
  }

  return result;
}

console.log(bubbleSort(numbers));
