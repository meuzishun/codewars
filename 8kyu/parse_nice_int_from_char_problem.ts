// My solution
export function get_age(age: string): number {
  return parseInt(age[0]);
}

/*
Parameters: a string
Return: a number
Examples:
  get_age("2 years old") => 2
  get_age("4 years old") => 4
  get_age("5 years old") => 5
  get_age("7 years old") => 7
Pseudocode:
  return the first char as a number
Questions:
  What happens if some other data type besides a string is passed in?
  What happens if no argument is passed in?
  What happens if too many arguments are passed in?
*/

// Top solution
// export { get_age };

// function get_age(age: string): number {
//   return parseInt(age);
// }
