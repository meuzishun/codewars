# My solution

def validate_base(num, base):
    chars = list(num)
    
    for c in chars:
        if c.isdigit():
            if int(c) >= base:
                return False
        if c.isalpha():
            if ord(c) - ord('A') + 10 >= base:
                return False
    return True
    
'''
Paramters: a string of digits and capital letters and an integer > 1 < 37
Return: a boolean
Examples:
    validate_base('7623',  8) -> True
    validate_base('ABCDEF', 16) -> True
    validate_base('6124', 5) -> False
    validate_base('ABC', 12) -> False
    validate_base('Y', 34) -> False
    validate_base('0020', 10) -> True
Pseudocode:
    Convert the string into a list and iterate:
        if the character is an integer:
            convert the character to an integer
            if the integer is less than or equal to the base:
                return False
        if the character is a letter:
            find the code (ord) of the letter
            subtract the value of 'A' and add 10
            if the result is less than or equal to the base:
                return False:
        return True
'''

# Top solution (feels like cheating)

def validate_base(num, base):
    try:
        num = int(num, base)
        return True
    except:
        return False
    
# Another solution (also not ideal)

from string import ascii_uppercase, digits

BASE = digits + ascii_uppercase

def validate_base(num, base):
    return set(num)<=set(BASE[:base])

# One more

def validate_base(num, base):
    return all([n in "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"[:base] for n in num])