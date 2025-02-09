# My solution

class RomanNumerals:
    @staticmethod
    def to_roman(val : int) -> str:
        valueDict = {
            1000: 'M',
            900: 'CM',
            500: 'D',
            400: 'CD',
            100: 'C',
            90: 'XC',
            50: 'L',
            40: 'XL',
            10: 'X',
            9: 'IX',
            5: 'V',
            4: 'IV',
            1: 'I',
        }
        
        result = ''
        chars = list(str(val))[::-1]

        for i, c in enumerate(chars):
            num = int(c)
            dec = 10**i
            print(num, dec)
            
            if num > 0:
                if num * dec in valueDict:
                    token = valueDict[num * dec]
                    result = token + result
                elif num > 4:
                    five_token = valueDict[5 * dec]
                    one_token = valueDict[1 * dec] * (num - 5)
                    result = five_token + one_token + result
                else:
                    token = valueDict[dec] * num
                    result = token + result
#         
        return result

    @staticmethod
    def from_roman(roman_num : str) -> int:
        symbolDict = {
            'M': 1000,
            'CM': 900,
            'D': 500,
            'CD': 400,
            'C': 100,
            'XC': 90,
            'L': 50,
            'XL': 40,
            'X': 10,
            'IX': 9,
            'V': 5,
            'IV': 4,
            'I': 1
        }
        
        result = 0
        charLen = len(roman_num)
        i = 0
        
        while i < charLen:
            char = roman_num[i]
            nextChar = None
            
            if i + 1 < charLen:
                nextChar = roman_num[i + 1]
                
            if nextChar and f"{char}{nextChar}" in symbolDict:
                result += symbolDict[f"{char}{nextChar}"]
                i += 2
                
            else:
                result += symbolDict[char]
                i += 1
                
        return result

'''
Parameters: an int (to_roman) or a string (from_roman)
Return: a string (to_roman) or an int (from_roman)
Examples:
    do_test(1000, 'M')
        to_roman(4) -> 'IV'
        to_roman(1) -> 'I'
        to_roman(1990) -> 'MCMXC'
        to_roman(2008) -> 'MMVIII'
        
        from_roman('XXI') -> 21
        from_roman('I') -> 1
        from_roman('IV') -> 4
        from_roman('MMVIII') -> 2008
        from_roman('MDCLXVI') -> 1666
Questions:
    What if the wrong type is passed in?
    What if nothing is passed in?
    What if a negative number is passed in?
    What if 0 is passed in?
    Is there a max value?
Pseudocode:
    Create dictionaries in both functions that are mirror images of each other (symbol -> value, value -> symbol)
    We could create a way/function that separates the symbol into tokens (e.g. 'C' vs 'CM' vs 'CD')
        
'''

# Top solution

from collections import OrderedDict
import re


ROMAN_NUMERALS = OrderedDict([
    ('M', 1000),
    ('CM', 900),
    ('D', 500),
    ('CD', 400),
    ('C', 100),
    ('XC', 90),
    ('L', 50),
    ('XL', 40),
    ('X', 10),
    ('IX', 9),
    ('V', 5),
    ('IV', 4),
    ('I', 1),
])

DECIMAL_TO_ROMAN = [(v, k) for k, v in ROMAN_NUMERALS.items()]

ROMAN_RE = '|'.join(ROMAN_NUMERALS)


class RomanNumerals(object):
    @staticmethod
    def from_roman(roman):
        return sum(ROMAN_NUMERALS[d] for d in re.findall(ROMAN_RE, roman))

    @staticmethod
    def to_roman(decimal):
        result = []
        for number, roman in DECIMAL_TO_ROMAN:
            while decimal >= number:
                decimal -= number
                result.append(roman)
        return ''.join(result)
    
# Another one (no lib)

class RomanNumerals:

    def to_roman(val):
        onesRoman = ["","I","II","III","IV","V","VI","VII","VIII","IX"]
        tensRoman = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"]
        hundsRoman = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"]
        thousRoman = ["","M","MM","MMM","MMMM"]
            
        ones =  onesRoman[val % 10]
        tens = tensRoman[val // 10 % 10]
        hunds = hundsRoman[val // 100 % 10]
        thous = thousRoman[val // 1000]
        
            
        return thous + hunds + tens + ones

    def from_roman(roman_num):
        out = 0 
        mx = 0
        for cur in map(lambda c: { 'M': 1000, 'D': 500, 'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1 } [c], roman_num[::-1]):
            if cur >= mx: 
                out += cur
                mx = cur
            else:
                out -= cur
        
        return out