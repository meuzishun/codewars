# My solution

def button_sequences(seqR, seqB):
    result = ''
    last_added = ''
    
    for i in range(len(seqR)):
        curr_state = f"{seqR[i]}{seqB[i]}"
        
        if curr_state == '00':
            last_added = ''
        
        if curr_state == '11':
            if last_added == '':
                result += 'R'
                last_added = 'R'
                
        if curr_state == '10':
            if last_added != 'R':
                result += 'R'
                last_added = 'R'
                
        if curr_state == '01':
            if last_added != 'B':
                result += 'B'
                last_added = 'B'
        
    return result
            

'''
Parameters: two strings of 0s and 1s representing the states of each button
Return: a string of Rs and Bs representing the lighting sequence
Examples:
    button_sequences(
        "10011010",
        "10110111"
    ) -> "RBRB"
    button_sequences(
        "01001000",
        "01011100"
    ) -> "RB"
    button_sequences(
        "01101000",
        "00111000"
    ) -> "RB"
Questions:
    What if the sequences are not strings?
    What if the sequences contain chars other than 1 or 0?
    What if only one sequence is passed in?
    What if nothing is passed in?
    What if the sequence lengths don't match?
    
Pseudocode:
    establish a result string, initialized to empty 
    establish a current state for the lights, initialized to empty string
    iterate over each sequence at the same time
        (0, 0) -> ''
        (1, 0) -> 
        (1, 1)
        (0, 1)
        compare the current char of each seq and get the R, B, or '' value
        if the value is different than the current state, append the value result string
    return the result
'''

# Top solution

def button_sequences(seqR, seqB):
    pattern, state = '', ''
    toBool = lambda seq : [i == '1' for i in seq]
    for red, blue in zip(toBool(seqR), toBool(seqB)):
        if red and state == 'R' or blue and state == 'B':
            continue
        state = 'R' if red else 'B' if blue else ''
        pattern += state
    return pattern