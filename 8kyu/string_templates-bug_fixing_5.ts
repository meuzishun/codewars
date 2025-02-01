// My solution
export function buildString(...template: string[]): string {
  return `I like ${template.join(', ')}!`;
}

/*
Parameters:
  1 or more strings
Return:
  a string
Examples:
  buildString('Cheese','Milk','Chocolate') => 'I like Cheese, Milk, Chocolate!'
  buildString('Cheese','Milk') => 'I like Cheese, Milk!'
  buildString('Chocolate') => 'I like Chocolate!'
Questions:
  What if another type other than string is passed in?
  What if the string(s) is empty?
  What if nothing is passed in?
Thoughts:
  Is it just missing a space?
Pseudocode:
  `I like ${template.join(', ')}!`;
*/
