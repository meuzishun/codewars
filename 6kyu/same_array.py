# My solution
def same(arr_a, arr_b):
    if len(arr_a) != len(arr_b):
        return False
    
    if len(arr_a) == 0 and len(arr_b) == 0:
        return True
    
    nums_a = []
    nums_b = []
    
    for sub in arr_a:
        sub.sort()
        nums_a.append(int(''.join(str(n) for n in sub)))
        
    for sub in arr_b:
        sub.sort()
        nums_b.append(int(''.join(str(n) for n in sub)))
    
    nums_a.sort()
    nums_b.sort()
    
    return nums_a == nums_b

    
'''
Parameters: two arrays with 0 or more sub-arrays of 2 ints
Return: Boolean
Examples:
    same([[2,5], [3,6]], [[5,2], [3,6]]) => True
    same([[2,5], [3,6]], [[6,3], [5,2]]) => True
    same([[2,5], [3,6]], [[6,3], [2,5]]) => True
    same([[2,3], [3,4]], [[4,3], [2, 4]]) => False
    same([[2,3], [3,2]], [[2,3]]) => False
Pseudocode:
    if len(arr_a) != len(arr_b) return False
    if len(arr_a) == 0 and len(arr_b) == o return True
    
    nums_a = []
    nums_b = []
    
    for sub in arr_a:
        nums_a.append(int(join(str(n) in sub.sort()))
        
    compare
'''

# Top solution
def same(arr_a, arr_b):
    return sorted(map(sorted, arr_a)) == sorted(map(sorted, arr_b))

# Another solution (less concise but a bit clearer)
def same(arr_a, arr_b):
    return sorted(sorted(a) for a in arr_a) == sorted(sorted(b) for b in arr_b)