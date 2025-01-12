# My solution
class List(object):
    def count_spec_digits(self, integers_list, digits_list):
        count_dict = {}
        
        for digit in digits_list:
            count_dict[digit] = 0
            
        for num in integers_list:
            str_digits = list(str(abs(num)))
            
            for char in str_digits:
                digit = int(char)
                
                if digit in count_dict:
                    count_dict[digit] += 1
                    
        results = []
        
        for digit, count in count_dict.items():
            results.append((digit, count))
            
        return results
            
    
'''
Parameters: two lists, each of integers
Return: a list of tuples, each a pair of integers
Examples:
    count_spec_digits([1, 1, 2 ,3 ,1 ,2 ,3 ,4], [1, 3]) => [(1, 3), (3, 2)]
    count_spec_digits([-18, -31, 81, -19, 111, -888], [1, 8, 4]) == [(1, 7), (8, 5), (4, 0)]
Pseudocode:
    Initialize an empty dict
    Iterate over the 2nd list
        Create dict keys for each item and set the value to 0
    Iterate over the 1st list
        Get the abs of the item and convert it to string
        Split the item into a list
        Iterate over the list of digits
            Check for the key in the dict (remember to convert to int first)
            if it exists, increment the value
    Initialize an empty results list
    Iterate over the entries of the dict
        convert each entry to tuple
        append the tuple to the results list
    Return the results list
        
    
Questions:
    What happens when types other than lists are passed in?
    What happens when the list contain types other than integers?
    What happens if too few arguments are passed in?
    What happens if integers longer than one digit are passed into the 2nd list?
    What happens if either/both lists are empty?
    What happens if a digit is repeated in the 2nd list?
'''

# Top voted solution:
from collections import Counter


class List(object):
    @staticmethod
    def count_spec_digits(integers_list, digits_list):
        counts = Counter(''.join(str(abs(a)) for a in integers_list))
        return [(b, counts[str(b)]) for b in digits_list]
    
# Another solution with lib:
class List(object):
    def count_spec_digits(self, integers_list, digits_list):
        s = "".join(str(i) for i in integers_list)
        return [(dig, s.count(str(dig))) for dig in digits_list]