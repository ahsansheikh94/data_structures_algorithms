var construct2DArray = function (original, m, n) {
  if (m * n !== original.length) {
    return [];
  }

  if (n === original.length) {
    return [original];
  }

  return [
    original.slice(0, n),
    ...construct2DArray(original.slice(n, original.length), m - 1, n),
  ];
};

console.log(construct2DArray([1, 2, 3, 4, 5, 6], 3, 2));
