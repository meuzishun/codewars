// My solution

const solution = function (firstArray, secondArray) {
  if (!secondArray || !firstArray) {
    throw new Error('Two arrays required');
  }

  if (!Array.isArray(firstArray) || !Array.isArray(secondArray)) {
    throw new Error('Arguments must be arrays');
  }

  if (firstArray.length !== secondArray.length) {
    throw new Error('Array arguments must be the same length');
  }

  if (firstArray.length === 0 || secondArray.length === 0) {
    throw new Error('Arrays cannot be empty');
  }

  let sum = 0;

  for (let i = 0; i < firstArray.length; i++) {
    const firstValue = firstArray[i];
    const secondValue = secondArray[i];

    if (typeof firstValue !== 'number' || typeof secondValue !== 'number') {
      throw new Error('Array elements must be numbers');
    }

    if (
      Math.round(firstValue) !== firstValue ||
      Math.floor(secondValue) !== secondValue
    ) {
      throw new Error('Array elements must be integers');
    }

    const diff = firstValue - secondValue;
    sum += diff * diff;
  }

  return sum / firstArray.length;
};

/*
Questions:
  What if the arrays are different lengths?
  What if the arrays are empty?
  What if the values in the arrays are not all ints?
Parameters: 2 arrays of integers
Return: a number
Examples:
  [1, 2, 3], [4, 5, 6]              -->   9   because (9 + 9 + 9) / 3
  [10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
  [-1, 0], [0, -1]                  -->   1   because (1 + 1) / 2
Pseudocode:
  Check to make sure the arrays are the same length
  Check to make sure both arrays are not empty
  Initialize a sum of 0
  Iterate over the first array
    Check that both i values are integers
    Get the difference between values, square it, and add it to the sum
  return the sum / length of first array
*/

// Top solution

function solution(a, b) {
  return (
    a.reduce(function (s, n, i) {
      return s + Math.pow(n - b[i], 2);
    }, 0) / a.length
  );
}
