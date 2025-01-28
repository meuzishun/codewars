// My solution
function solution(roman) {
  const RNs = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
  const RNdict = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  let result = 0;

  const chars = roman.split('');

  for (let i = 0; i < chars.length; i++) {
    const val = RNdict[chars[i]];
    const currIndex = RNs.indexOf(chars[i]);
    const nextIndex = RNs.indexOf(chars[i + 1]);

    if (nextIndex !== -1 && nextIndex < currIndex) {
      result -= val;
    } else {
      result += val;
    }
  }

  return result;
}

/*
Parameters: a string
Return: a number
Examples:
  doTest('XXI', 21);
		solution('I') => 1
		solution('IV') => 4
		solution('MMVIII') => 2008
		solution('MDCLXVI') => 1666
Questions:
  What happens if some type other than string in passed in?
  
Thoughts:
  I feel like a lookup table/dict would be helpful but the order of the chars matters
  Maybe we can have a dict for values but also an array of the chars so we know when they are presented 'out of order' that we are to substract rather than add
Pseudocode:
  let result;
  
  const RNs = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
  const RNdict = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  };
  
  const chars = roman.split('');
  for (let i = 0; i < chars.length; i++) {
    const val = RNdict[chars[i]];
    if (chars[i + 1] && RN.indexOf(chars[i + 1]) > RN.indexOf(chars[i])) {
      result - val;
    } else {
      result + val;
    }
  }
*/

// Top solution
function solution(roman) {
  var data = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
  var numbers = roman.split('');
  var sum = 0,
    i;

  for (i = 0; i < numbers.length; i++) {
    if (data[numbers[i]] < data[numbers[i + 1]]) {
      sum += data[numbers[i + 1]] - data[numbers[i]];
      i++;
    } else {
      sum += data[numbers[i]];
    }
  }

  return sum;
}
