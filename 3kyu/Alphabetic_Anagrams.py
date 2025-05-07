# My solution

import math

def create_char_dict(word):
    char_dict = {}
    
    for c in word:
        if c not in char_dict:
            char_dict[c] = 1
        else:
            char_dict[c] += 1
    
    return char_dict

def calc_permutations(dict):
    count = 0
    denominator = 1
    
    for num in dict.values():
        count += num
        denominator *= math.factorial(num)
    
    numerator = math.factorial(count)

    return numerator // denominator

def list_position(word):
    if len(word) == 1:
        return 1
    
    ordered_chars = sorted(set(list(word)))
    
    if ordered_chars == list(word):
        return 1
    
    curr_char = word[0]
    char_counts = create_char_dict(word)
    curr_char_index = ordered_chars.index(curr_char)
    prior_chars = ordered_chars[:curr_char_index]
    
    sum = 0
    
    for prior_char in prior_chars:
        prior_counts = char_counts.copy()
        prior_counts[prior_char] -= 1
        sum += calc_permutations(prior_counts)
    
    return int(sum + list_position(word[1:]))

# Top solution

from collections import Counter

def listPosition(word):
    l, r, s = len(word), 1, 1
    c = Counter()

    for i in range(l):
        x = word[(l - 1) - i]
        c[x] += 1
        for y in c:
            if (y < x):
                r += s * c[y] // c[x]
        s = s * (i + 1) // c[x]
    return r