class List:
    def remove_(self, integer_list, values_list):
        int_dict = {x: True for x in values_list}
        return [i for i in integer_list if int_dict.get(i) == None]
    
'''
Parameters: two lists of ints
Return: a list of ints
Examples:
    ([1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2]) => [5, 6, 7, 8]
    ([1, 1, 2, 3, 1, 2, 3, 4], [1, 3]) => [2, 2, 4]
Pseudocode:
    create a dict for the values_list (for quicker lookup)
    iterate over integer_list
        if int not key in dict add to results list
'''

# Top solution
class List(object):
    def remove_(self, integer_list, values_list):
        return [i for i in integer_list if i not in values_list]

# Another one
class List(object):
    def remove_(self, integer_list, values_list):
        blacklist = set(values_list)
        return [val for val in integer_list if val not in blacklist]