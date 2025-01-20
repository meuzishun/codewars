// My solution
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.reduce((a, c) => (!c ? a : a + Number(c)), 0);
}

/*
Parameters: an array of booleans, undefined, or null
Return: a number
Examples:
Pseudocode:
  reduce the array so the count increases with each true value
  return arrayOfSheep.reduce((a, c) => a + c, 0);
*/

// Top solution
// export function countSheeps(arrayOfSheep) {
//   return arrayOfSheep.filter(Boolean).length;
// }
