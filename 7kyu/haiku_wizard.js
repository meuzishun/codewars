function haikuWizard(arr) {
  let result = '';

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      const number = arr[i][j];
      const first = Math.floor(number / 10) - 1;
      const second = number % 10;
      result += words[first][second];

      if (j < arr[i].length - 1) {
        result += ' ';
      }
    }

    if (i < arr.length - 1) {
      result += '\n';
    }
  }
  return result;
}

/*
Parameters - one arr, with nested sub-arrays
Return - string, formatted with new line chars
Example - [[10, 11, 23, 16], [50, 12, 14], [15, 40]] => "No haiku wizard are you yet! \n\nHave you tried using loops? \n\n"
Pseudocode - {
  let result = ''
  for each subarray:
    loop through each number
      split the number in i and j
      subtract 1 from the first
      lookup the word: words[i][j]
      concatentate the result with the word
    concatentate \n to the result (twice?)
}

*/
