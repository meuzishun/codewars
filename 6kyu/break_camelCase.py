# My solution
def solution(s):
    if s == '':
        return s
    
    result = ''
    
    for i in range(len(s)):
        if i > 0 and s[i].upper() == s[i]:
            result += ' '
        result += s[i]
    
    return result
            

'''
Parameters: a string
Return: a string
Examples:
    solution("helloWorld") => "hello World"
    solution("camelCase") => "camel Case"
    solution("breakCamelCase") => "break Camel Case"
Questions:
    What should be returned if another type is passed in? What about nothing passed in? More than one string?
Thoughts:
    Initialize a capital_index to None
    Initialize a lower_found boolean to False
    Iterate over the string
        if the char is lowercase:
            set lower_found to True
        if the char is uppercase and the lower_found is True:
            set capitalIndex to current index
    if capital_index is not None:
        return string sliced beginning to capitalIndex + space + string sliced from capital_index to end
    else:
        return string
        
    Initialize an empty string
    Iterate over the given string:
        if the index is > 0 and the char is uppercase:
            add space and char to string
        else:
            add char to string
    return string
    
Pseudocode:
    Initialize an empty string
    Iterate over the given string:
        if the index is > 0 and the char is uppercase:
            add space and char to string
        else:
            add char to string
    return string
'''

# Top solution
def solution(s):
    return ''.join(' ' + c if c.isupper() else c for c in s)