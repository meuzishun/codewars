# My solution

def descending_order(num):
    if num < 10:
        return num
    
    return int(''.join(reversed(sorted(list(str(num))))))
    
'''
Parameters: an integer
Return: an integer 
Examples:
    descending_order(0) -> 0
    descending_order(15) -> 51
    descending_order(123456789) -> 987654321
Pseudocode:
    if num is < 10 return num
    convert the num to a string
    split the string into a list of chars
    sort the list and reverse
    join the list
    convert back to int
'''

# Top solution

def Descending_Order(num):
    return int("".join(sorted(str(num), reverse=True)))