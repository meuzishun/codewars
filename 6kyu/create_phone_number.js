// My solution

function createPhoneNumber(numbers) {
  return `(${numbers.slice(0, 3).join('')}) ${numbers
    .slice(3, 6)
    .join('')}-${numbers.slice(6).join('')}`;
}

/*
Parameters: an array of ints
Return: a string
Examples:
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) -> "(123) 456-7890"
  createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) -> "(111) 111-1111"
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) -> "(123) 456-7890"
Pseudocode:
  return a string literal that slices 0-3, 3-6, 6-end with chars
*/

// Top solution

function createPhoneNumber(numbers) {
  var format = '(xxx) xxx-xxxx';

  for (var i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i]);
  }

  return format;
}
