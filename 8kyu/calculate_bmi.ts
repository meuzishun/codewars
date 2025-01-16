export function bmi(weight: number, height: number): string {
  const bmi = weight / height ** 2;

  if (bmi <= 18.5) {
    return 'Underweight';
  }

  if (bmi <= 25) {
    return 'Normal';
  }

  if (bmi <= 30) {
    return 'Overweight';
  }

  return 'Obese';
}

/*
Parameters: two numbers
Return: a string
Examples:
  bmi(50, 1.80) => "Underweight"
  bmi(80, 1.80) => "Normal"
  bmi(90, 1.80) => "Overweight"
  bmi(100, 1.80) => "Obese"
Pseudocode:
  bmi = weight / height ** 2
  
  if bmi <= 18.5
    return "Underweight"
  if bmi <= 25
    return "Normal"
  if bmi <= 30
    return "Overweight"
  return "Obese"
*/
