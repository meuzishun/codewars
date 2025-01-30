def solution(text, ending):
    return text.endswith(ending)
    
'''
Parameters: two strings
Return: a boolean
Examples:
    solution("sensei", "i") => True
    solution("fails", "ails") => True
    solution("sumo", "omo") => False
    solution("samurai", "ra") => False
Questions:
    What is returned if no or too few arguments are passed in?
    What is returned if other types are passed in as arguments?
Thoughts:
    There is probably a method like 'endsWith'...
    
'''