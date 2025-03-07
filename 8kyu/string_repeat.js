// My solution

function repeatStr(n, s) {
  return s.repeat(n);
}

/*
Parameters: a number and a string
Return: a string
Examples:
  repeatStr(3, "*") -> "***"
  repeatStr(5, "#") -> "#####"
  repeatStr(2, "ha ") -> "ha ha "
  repeatStr(0, "") -> ""
  repeatStr(0, "I") -> ""
  repeatStr(5, "") -> ""
  repeatStr(6, "I") -> "IIIIII"
  repeatStr(5, "Hello") -> "HelloHelloHelloHelloHello"
Pseudocode:
  return  s.repeat(n)
*/
