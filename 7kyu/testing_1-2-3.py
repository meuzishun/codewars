# My solution

def number(lines):
    return [f"{i + 1}: {line}" for i, line in enumerate(lines)]
    
'''
Parameters: a list of strings
Return: a list of strings
Examples:
    number([]) -> []
    number(["a", "b", "c"]) -> ["1: a", "2: b", "3: c"]
Pseudocode:
    Iterate over the given list
        insert the index + 1, a colon, and a space
    return the new list
'''

# Top solution

def number(lines):
    return [f"{counter}: {line}" for counter, line in enumerate(lines, start=1)]