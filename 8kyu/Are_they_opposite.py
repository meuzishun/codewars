# My solution

def is_opposite(s1,s2):
    if len(s1) == 0 or len(s2) == 0:
        return False
    
    for i in range(len(s1)):
        if abs(ord(s1[i]) - ord(s2[i])) != 32:
            return False
    
    return True

# Top solution

def is_opposite(s1, s2):
    return False if not(s1 or s2) else s1.swapcase() == s2