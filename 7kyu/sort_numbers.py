# My solution
def solution(nums):
    if nums is None or nums == []:
        return []
    
    return sorted(nums)

'''
Parameters: a list of numbers
Return: a list
Examples:
    solution([1,2,3,10,5]) -> [1,2,3,5,10]
    solution(None) -> []
    solution([]) -> []
    solution([20,2,10]) -> [2,10,20]
    solution([2,20,10]) -> [2,10,20]
Pseudocode:
    check for none or [] and return []
    return nums.toSorted()
'''

# Top solution
def solution(nums):
    return sorted(nums) if nums else []