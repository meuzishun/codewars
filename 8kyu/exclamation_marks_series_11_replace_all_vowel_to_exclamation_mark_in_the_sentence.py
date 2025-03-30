# My solution
import re
def replace_exclamation(st):
    return re.sub(r'[aeiouAEIOU]',"!",st)

# Top solution
def replace_exclamation(s):
    return ''.join('!' if c in 'aeiouAEIOU' else c for c in s)