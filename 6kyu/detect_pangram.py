# My solution

def is_pangram(st):
    for i in range(26):
        char = chr(97 + i)
        
        if char not in st and char.upper() not in st:
            return False
    
    return True

'''
Parameters: a string
Return: a boolean
Examples:
    is_pangram("The quick brown fox jumps over the lazy dog.") => True
    is_pangram("Cwm fjord bank glyphs vext quiz") => True
    is_pangram("Pack my box with five dozen liquor jugs.") => True
    is_pangram("How quickly daft jumping zebras vex.") => True
    is_pangram("ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ") => True
    is_pangram("This isn't a pangram!") => False
    is_pangram("abcdefghijklm opqrstuvwxyz") => False
    is_pangram("Aacdefghijklmnopqrstuvwxyz") => False
Questions:
    What happens if the string is empty?
    What happens if nothing is passed in?
    What happens if more than one string is passed in?
    What happens if something other than a string is passed in?
Thoughts:
    We could iterate over a 26 range to create a list of chars
    As we create the char (a-z), we can check to see if the string contains it or the upper version
        if not, return false
    If we make it through the entire list, return true
Pseudocode:
    for i in range(26):
        char = chr(97 + i)
        
        if char not in st and char.upper() not in st:
            return False
    
    return True
'''

# 2nd to top solution

import string

def is_pangram(s):
    return set(string.ascii_lowercase).issubset(s.lower())