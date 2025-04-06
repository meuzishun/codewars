// My solution

Array.prototype.max = function () {
  let maxVal = -Infinity;

  for (let i = 0; i < this.length; i++) {
    let num = this[i];

    if (typeof num !== 'number') {
      num = Number(num);
    }

    if (isNaN(num)) {
      return NaN;
    }

    if (num > maxVal) {
      maxVal = num;
    }
  }

  return maxVal;
};

/*
Parameters: none (array method)
Return: a number or NaN
Examples:
  [2,5,1,3].max() -> 5
  [1,2,3,8,4,9,7,42,99].max() -> 99
  [2,'5',1,3].max() -> 5
  [2,5,1,'ab'].max() -> NaN
Pseudocode:
  initialize a max value of -Infinity
  iterate over the array
    if the element is not a number and cannot be coerced into a number
      return NaN
    compare the element to the max value
      replace if larger
  return the max value
*/

// Top solution

// Array.prototype.max = function () {
//   return Math.max(...this);
// };
