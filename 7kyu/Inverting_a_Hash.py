# My solution

def invert_hash(dictionary):
    result = {}
    
    for key, val in dictionary.items():
        result[val] = key
    
    return result

'''
Parameters: a dictionary
Return: a dictionary with keys as values and values as keys
Examples:
    invert_hash({'hello':'world'}) -> {'world':'hello'}
    invert_hash({'a':1, 'b':2, 'c':3}) -> {1:'a', 2:'b', 3:'c'}
    invert_hash({(1, 2):"x", "y":(3, 4)}) -> {"x":(1, 2), (3, 4):"y"}
Pseudocode:
    create a new, empty dict
    iterate over the argument's items, adding them to the new dict but swapping the keys and values
'''

# Top solution

def invert_hash(dictionary):
    return {v:k for k, v in dictionary.items()}