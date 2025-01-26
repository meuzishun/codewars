// My solution
export function saleHotdogs(n: number): number {
  return n * (n >= 10 ? 90 : n >= 5 ? 95 : 100);
}

/*
Parameters: a number
Return: a number
Examples:
  saleHotdogs(1) => 100
  saleHotdogs(4) => 400
  saleHotdogs(5) => 475
  saleHotdogs(9) => 855
  saleHotdogs(10) => 900
  saleHotdogs(100) => 9000
Questions:
  What happens if an argument of not type number is passed in?
  What happens if the number is 0?
  What happens if the number is negative?
Thoughts:
  
Pseudocode:
  return n * (n >= 10 ? 90 : n >= 5 ? 95 : 100);
*/
