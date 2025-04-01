// My solution

export function finalGrade(exam: number, projects: number): number {
  if (exam > 90 || projects > 10) {
    return 100;
  }
  if (exam > 75 && projects > 4) {
    return 90;
  }
  if (exam > 50 && projects > 1) {
    return 75;
  }
  return 0;
}

/*
Parameters: 2 numbers
Return: 1 number
Examples:
  finalGrade(100, 12) -> 100
  finalGrade(85, 5) -> 90
Pseudocode:
if exam > 90 or projects > 10 return 100
if exam > 75 and projects > 4 return 90
if exam > 50 and projects > 1 return 75
otherwise return 0
*/

// Top solution

// export const finalGrade = (exam: number, projects: number): number => {
//   if (exam > 90 || projects > 10) return 100;
//   if (exam > 75 && projects >= 5) return 90;
//   if (exam > 50 && projects >= 2) return 75;
//   return 0;
// };
