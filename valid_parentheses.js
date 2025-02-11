// My solution

function validParentheses(parenStr) {
  const charDict = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  const openChars = Object.values(charDict);
  const closeChars = Object.keys(charDict);

  const hist = [];

  for (const char of parenStr) {
    if (closeChars.includes(char)) {
      if (hist.length === 0) {
        return false;
      }

      const last = hist.pop();

      if (charDict[char] !== last) {
        return false;
      }

      continue;
    }

    if (openChars.includes(char)) {
      hist.push(char);
    }
  }

  if (hist.length > 0) {
    return false;
  }

  return true;
}

/*
Parameters: a str
Return: a bool
Examples:
  validParentheses("()") -> true
  validParentheses("((()))") -> true
  validParentheses("()()()") -> true
  validParentheses("(()())()") -> true
  validParentheses("()(())((()))(())()") -> true
  validParentheses(")(") -> false
  validParentheses("()()(") -> false
  validParentheses("((())") -> false
  validParentheses("())(()") -> false
  validParentheses(")()") -> false
  validParentheses(")") -> false
Pseudocode:
  const charDict = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  
  const openChars = Object.values(charDict);
  const closeChars = Object.keys(charDict);
  
  const hist = [];
  
  for (const char of parenStr) {
    if (closeChars.includes(char)) {
      if (hist.length === 0) {
        return false;
      }
      
      const last = hist.pop();
      
      if (charDict[char] !== last) {
        return false;
      }
      
      continue;
    }
    
    if (openChars.includes(char)) {
      hist.push(char);
    }
  }
*/

// Top solution

function validParentheses(parenStr) {
  let curr = 0;
  for (let i = 0; i < parenStr.length; i++) {
    if (parenStr[i] === '(') {
      curr++;
    } else {
      curr--;
    }
    if (curr < 0) {
      return false;
    }
  }
  return curr === 0;
}

// Better one (IMHO)

function validParentheses(parenStr) {
  let counter = 0;

  for (let char of parenStr) {
    if (char === '(') counter++;
    if (char === ')') counter--;

    if (counter < 0) return false;
  }
  return counter === 0;
}
