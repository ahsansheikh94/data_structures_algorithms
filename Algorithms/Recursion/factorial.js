// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  if (number === 1) {
    return number;
  }

  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  let answer = 1;

  for (let i = number; i > 0; i--) {
    answer *= i;
  }

  return answer;
}

console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5));
