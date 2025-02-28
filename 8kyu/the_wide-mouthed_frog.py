# My solution

def mouth_size(animal): 
    if animal.lower() == "alligator":
        return "small"
    return "wide"
    
'''
Parameters: a string
Return: a string ("wide" or "small")
Examples:
    mouth_size("toucan") -> "wide"
    mouth_size("ant bear") -> "wide"
    mouth_size("alligator") -> "small"
Pseudocode:
    if animal == 'alligator' return "small"
    else return "wide"
'''

# Top solution

def mouth_size(animal): 
    return 'small' if animal.lower() == 'alligator' else 'wide'