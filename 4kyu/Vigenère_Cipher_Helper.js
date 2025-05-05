// My solution

function VigenèreCipher(key, abc) {
  this.encode = function (str) {
    let result = '';
    const chars = str.split('');

    for (let i = 0; i < chars.length; i++) {
      const strCharIndex = abc.indexOf(str[i]);

      if (strCharIndex === -1) {
        result += str[i];
        continue;
      }

      const keyCharIndex = abc.indexOf(key[i % key.length]);

      result += abc[(strCharIndex + keyCharIndex) % abc.length];
    }

    return result;
  };
  this.decode = function (str) {
    let result = '';
    const chars = str.split('');

    for (let i = 0; i < chars.length; i++) {
      const strCharIndex = abc.indexOf(str[i]);

      if (strCharIndex === -1) {
        result += str[i];
        continue;
      }

      const keyCharIndex = abc.indexOf(key[i % key.length]);

      result += abc.at(strCharIndex - keyCharIndex);
    }

    return result;
  };
}

/*
Parameters: 2 strings, first is the key the second is the string to encode
Return: a string that is the encoded version of the 2nd argument
Examples:
var abc, key;
  abc = "abcdefghijklmnopqrstuvwxyz";
  key = "password"
  c = new VigenèreCipher(key, abc);

  c.encode('codewars') -> 'rovwsoiv'
  c.decode('rovwsoiv') -> 'codewars'

  c.encode('waffles') -> 'laxxhsj'
  c.decode('laxxhsj') -> 'waffles'

  c.encode('CODEWARS') -> 'CODEWARS'
  c.decode('CODEWARS') -> 'CODEWARS'
  
Pseudocode:
  Encode:
  Initialize a return string (empty)
  Iterate over each char in the str
    Find index of char from str in abc
    If not found (-1) add original char to return string
    Else find index of char from key at same i in abc (mod key len)
    Add both indices (mod abc len) and add char at that position in abc

  Decode:
  Initialize a return string (empty)
  Iterate over each char in the str
    Find index of char from str in abc
    If not found (-1) add original char to return string
    Else find index of char from key at same i in abc (mod key len)
    Add both indices (mod abc len) and subtract char at that position in abc
*/

// Top solution

function VigenèreCipher(key, alphabet) {
  function encode(direction, inStr) {
    var inChar, inIdx, outIdx, outChar, keyChar, offset;

    var outStr = '';

    // Process each character of the input string sequentially
    for (var pos = 0; pos < inStr.length; ++pos) {
      // Look up input character in the alphabet
      inChar = inStr.charAt(pos);
      inIdx = alphabet.indexOf(inChar);

      // If character isn't in alphabet, just copy it to output
      if (inIdx < 0) outChar = inChar;
      else {
        // Get the key character for the current position
        // and determine the shift distance
        keyChar = key.charAt(pos % key.length);
        offset = alphabet.indexOf(keyChar);

        // Shift the character forwards or backwards in
        // the alphabet, wrapping around if necessary
        outIdx = inIdx + direction * offset;
        if (outIdx >= alphabet.length) outIdx = outIdx - alphabet.length;
        else if (outIdx < 0) outIdx = outIdx + alphabet.length;

        outChar = alphabet.charAt(outIdx);
      }

      outStr += outChar;
    }

    return outStr;
  }

  // Encode by shifting characters forward in the alphabet
  this.encode = function (string) {
    return encode(1, string);
  };

  // Decode by shifting characters backwards in the alphabet
  this.decode = function (string) {
    return encode(-1, string);
  };
}
