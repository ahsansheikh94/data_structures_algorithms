const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  let result = array;
  for (let i = 0; i < result.length; i++) {
    let smallest = i;
    let temp = result[i];
    for (let j = i + 1; j < result.length; j++) {
      if (result[j] < result[smallest]) {
        smallest = j;
      }
    }
    result[i] = result[smallest];
    result[smallest] = temp;
  }
  return result;
}

console.log(selectionSort(numbers));
