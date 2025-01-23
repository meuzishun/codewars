// My solution
export function amIAfraid(day: string, num: number): boolean {
  const dayLookup: Record<string, (val: number) => boolean> = {
    Monday: (val: number) => val === 12,
    Tuesday: (val: number) => val > 95,
    Wednesday: (val: number) => val === 34,
    Thursday: (val: number) => val === 0,
    Friday: (val: number) => val % 2 === 0,
    Saturday: (val: number) => val === 56,
    Sunday: (val: number) => Math.abs(val) === 666,
  };

  return dayLookup[day](num);
}

/*
Parameters: a string and a number
Return: a boolean
Examples:
  amIAfraid("Monday", 13) => false
  amIAfraid("Sunday", -666) => true
  amIAfraid("Tuesday", 2) => false
  amIAfraid("Tuesday", 965) => true
  amIAfraid("Friday", 2) => true
Questions:
  What happens when the string is not a day?
Thoughts:
  create a dictionary with the days as keys and functions as values
Pseudocode:
  dayLookup = {
    Monday: (val) => val === 12,
    Tuesday: (val) => val > 95,
    Wednesday: (val) => val === 34
    etc.
  }
*/
