export function between(a: number, b: number): number[] {
  const result: number[] = [];
  for (let i = a; i <= b; i++) {
    result.push(i);
  }
  return result;
}

/*
Parameters: two numbers
Return: an array of numbers
Examples:
  between(1, 4) => [1, 2, 3, 4]
  between(-2, 2) => [-2, -1, 0, 1, 2]
Questions:
  What happens when some other type besides number is passed as an argument?
  What happens if a > b?
  What happens if a == b?
  What happens only one argument is passed in?
  What happens if no arguments are passed in?
  What happens if more than two arguments are passed in?
Thoughts:
  Just a simple loop?
Pseudocode:
  result = []
  for (i = a; i <= b; i++) {
    result.push(i)
  }
  return result
*/

// 2nd best
// export function between(a: number, b: number): number[] {
//   return Array.from({ length: b - a + 1 }, (_, j) => j + a);
// }
