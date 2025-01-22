# My solution
def integrate(coefficient, exponent):
    new_exp = exponent + 1
    new_coef = int(coefficient / new_exp)
    return f"{new_coef}x^{new_exp}"

'''
Parameters: two ints
Return: a str
Examples:
    integrate(3, 2) => "1x^3"
    integrate(12, 5) => "2x^6"
    integrate(20, 1) => "10x^2"
    integrate(40, 3) => "10x^4"
    integrate(90, 2) => "30x^3"
Pseudocode:
    new_exp = exponent + 1
    new_coef = int(coefficient / new_exp)
    return f"{new_coef}x^{new_exp}"
'''

# Top solution
def integrate(coefficient, exponent):
    return f'{coefficient // (exponent + 1)}x^{exponent + 1}'