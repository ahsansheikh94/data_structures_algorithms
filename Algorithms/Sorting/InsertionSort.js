const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  let result = array;

  for (let i = 1; i < result.length; i++) {
    for (let j = 0; j < i; j++) {
      if (result[i] < result[j]) {
        if (j === 0) {
          result.unshift(result[i]);
          delete result[i + 1];
          result = result.filter(Number);
        } else {
          result = [...result.slice(0, j), result[i], ...result.slice(j)];
          delete result[i + 1];
          result = result.filter(Number);
        }
        break;
      }
    }
  }

  return result;
}

console.log(insertionSort(numbers));
