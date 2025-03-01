# My solution

def array_diff(a, b):
    return [x for x in a if x not in set(b)]

'''
Parameters: two lists
Return: a single list 
Examples:
    array_diff([1,2], [1]) -> [2]
    array_diff([1,2,2], [1]) -> [2,2]
    array_diff([1,2,2], [2]) -> [1]
    array_diff([1,2,2], []) -> [1,2,2]
    array_diff([], [1,2]) -> []
    array_diff([1,2,3], [1, 2]) -> [3]
Pseudocode:
    create set of 2nd list (duplicates don't matter)
    iterate over 1st list checking to see if each element is in the set
    return the filtered list
'''

# Top solution

# ! Doesn't use set!

# def array_diff(a, b):
#     return [x for x in a if x not in b]