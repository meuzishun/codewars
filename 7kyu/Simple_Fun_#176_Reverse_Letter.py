# My solution

def reverse_letter(st):
    result = ''
    
    for c in st:
        if c.isalpha():
            result = c + result
        
    return result

# Top solution

def reverse_letter(s):
    return ''.join([i for i in s if i.isalpha()])[::-1]