export function number(array: string[]): string[] {
  return array.map((str, i) => `${i + 1}: ${str}`);
}

/*
Parameters: an array of strings
Return: an array of strings
Examples:
  number([]) => [];
  number(["a", "b", "c"]) => ["1: a", "2: b", "3: c"]; 
  number(["", "", "", "", ""]) => ["1: ", "2: ", "3: ", "4: ", "5: "]; 
Pseudocode:
  return an array, mapped over from the given array with the string prepended with index + 1 and a colon and space
*/
