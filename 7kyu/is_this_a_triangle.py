# My solution
def is_triangle(a, b, c):
    args = [a, b, c]
    
    for n in args:
        if n < 1:
            return False
        
    args.sort()
    
    return args[2] < args[1] + args[0]
    

'''
Parameters: 3 ints
Return: a boolean
Examples:
    is_triangle(1, 2, 2) => True, "didn't work when sides were 1, 2, 2"
    is_triangle(7, 2, 2) => False, "didn't work when sides were 7, 2, 2"
    is_triangle(1, 2, 3) => False, "didn't work when sides were 1, 2, 3"
    is_triangle(1, 3, 2) => False, "didn't work when sides were 1, 3, 2"
    is_triangle(3, 1, 2) => False, "didn't work when sides were 3, 1, 2"
    is_triangle(5, 1, 2) => False, "didn't work when sides were 5, 1, 2"
    is_triangle(1, 2, 5) => False, "didn't work when sides were 1, 2, 5"
Pseudocode:
    args = [a, b, c]
    for n in args:
        if n < 1:
            return False
    sorted = args.sort()
    return sorted[0] < sorted[1] + sorted[2]
    
Questions:
    What happens when less than 3 args are provided?
    What happens when more than 3 args are provided?
    What happens when 1 or more args are not ints?
Thoughts:
    Check for any values equal to 0 or less than 0
    Find max value and compare it to the sum of the other two
'''

# Top solution
def is_triangle(a, b, c):
    return (a<b+c) and (b<a+c) and (c<a+b)

# Another one
def is_triangle(a, b, c):
    a, b, c = sorted([a, b, c])
    return a + b > c