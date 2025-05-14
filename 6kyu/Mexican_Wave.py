# My solution

def wave(people):
    result = []
    
    for i in range(len(people)):
        chars = list(people)
        
        if chars[i].isalpha():
            chars[i] = chars[i].upper()
            result.append(''.join(chars))

    return result

'''
Parameters: a string that may contain whitespace but otherwise all lowercase or empty
Return: an array of the input string, each with a capital at the index of a loop
Examples:
    wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
    wave("codewars") => ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]
    wave("") => []
    wave("two words") => ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]
    wave(" gap ") => [" Gap ", " gAp ", " gaP "]
Pseudocode:
    Initialize an empty list
    Iterate over the string
        If char is a letter, replace it with the uppercase version
        Append list with new string
    Return list
'''

# Top solution

def wave(str):
    return [str[:i] + str[i].upper() + str[i+1:] for i in range(len(str)) if str[i].isalpha()]