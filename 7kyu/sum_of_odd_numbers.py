def row_sum_odd_numbers(n):
    val = (n * (n - 1)) + 1
    result = 0
    for _ in range(n):
        result += val
        val += 2
    return result
    
'''
Parameters: an int
Return: an int
Examples:
    row_sum_odd_numbers(1) => 1
    row_sum_odd_numbers(2) => 8
    row_sum_odd_numbers(13) => 2197
    row_sum_odd_numbers(19) => 6859
    row_sum_odd_numbers(41) => 68921
Pseudocode:
    val = (n * (n - 1)) + 1
    result = 0
    for _ in range(n):
        result += startVal
        val += 2
    return val
Questions:
    How to handle non-int args?
    How to handle 0 or negative args?
    How to handle too many args?
Thoughts:
    Create a nested list? No... when would we stop?
    Create only the portion of the nested list needed? Maybe...
    Figure out the math... if possible
    (1 * 0) + 1 -> 1
    (2 * 1) + 1 -> 3
    (3 * 2) + 1 -> 7
    (4 * 3) + 1 -> 13
    (5 * 4) + 1 -> 21
    (6 * 5) + 1 -> 31
    (7 * 6) + 1 -> 43
    (7 * 7) + 1 -> 57
    (r * (r - 1)) + 1 = startingInt
    val = startingInt
    result = 0
    for i in range(r):
        result += val
        val += 2
'''
