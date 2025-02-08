# My solution

def hex_word_sum(s):
    total = 0
    words = s.split(' ')
    
    for word in words:
        word = word.replace('O', '0')
        word = word.replace('S', '5')
        
        try:
            val = int(word, 16)
        except:
            val = 0
        
        total += val
    
    return total

'''
Parameters: a string
Return: an int
Examples:
    hex_word_sum('DEFACE') -> 14613198, 'Should convert hex to decimal correctly'
    hex_word_sum('SAFE') -> 23294, 'Should be able to interpret "S" as "5"'
    hex_word_sum('CODE') -> 49374, 'Should be able to interpret "O" as "0"'
    hex_word_sum('BUGS') -> 0, 'A word that cannot be converted to hex has value of 0'
    hex_word_sum('') -> 0, 'Empty string returns 0'
    hex_word_sum('DO YOU SEE THAT BEE DRINKING DECAF COFFEE') -> 13565769, 'Should work with multiple words'
    hex_word_sum('ASSESS ANY BAD CODE AND TRY AGAIN') -> 10889952, 'Should work with multiple words'
Questions:
    What happens if another type is passed in?
    What happens if nothing is passed in?
Thoughts:
    We could first replace each 'O' with '0' and 'S' with '5'
    then break the string up into words
    then check each word to see if it is a valid hex value with int function
    use try/catch to return value or 0
    
Pseudocode:

    total = 0
    words = s.split(' ')
    
    for word words:
        word = word.replace('O', '0')
        word = word.replace('S', '5')
        
        try:
            val = int(word, 16)
        except:
            val = 0
        
        total += val
    
    return total
'''

# Top solution

def hex_word_sum(s):
    return sum(int(w, 16) for w in s.translate(str.maketrans('OS', '05')).split() if set(w) <= set('0123456789ABCDEF'))