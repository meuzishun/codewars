# My solution

def colorful(number):
    hist = set()
    digits = list(str(number))
    
    for i, d in enumerate(digits):
        digit = int(d)
        
        if digit in hist:
            return False
        
        hist.add(digit)
        
        if i > 0:
            mult = digit * int(digits[i - 1])
            
            if mult in hist:
                return False
            
            hist.add(mult)
    
    return True

'''
Parameters: a non-negative integer
Return: a boolean
Examples:
    colorful(5) -> True
    colorful(23) -> True
    colorful(263) -> True
    colorful(235789) -> True
    colorful(50) -> False
    colorful(13) -> False
    colorful(236) -> False
    colorful(2357893) -> False
Pseudocode:
    Create an empty set
    Convert integer into a list of digits
    For each digit:
        Return False if the digit is in the set
        Append the digit to the set
        If the index of the digit is > 0
            Multiply the current digit by the prev
            Return False if the result is in the set
            Append it to the set if no
    return True since we made it through the gauntlet
'''

# Top solution

def colorful(number):
    base_result = []
    for x in str(number):
        base_result.append(int(x))
    for y in range(len(base_result) - 1):
        temp = base_result[y] * base_result[y + 1]
        base_result.append(temp)
    # Should you really eval the last value ? :shrug: If so, would use eval
    return len(set(base_result)) == len(base_result)