# My solution

def repair_sequence(sequence: list[int]) -> list[int]:
    # Check to make sure sequence has at least 4 ints
    if len(sequence) < 4:
        return sequence
    
    # Analyze intervals between each int sequence
    interval_list = []
    interval_dict = {}
    
    for i in range(len(sequence) - 1):
        diff = sequence[i + 1] - sequence[i]
        interval_list.append(diff)
        
        if diff in interval_dict:
            interval_dict[diff] += 1
        else:
            interval_dict[diff] = 1
        
    # Figure out the correct interval between ints
    intervals = list(interval_dict.keys())
    counts = list(interval_dict.values())
    
    if len(set(counts)) == 1:
        interval = sum(intervals) / len(intervals)
    else:
        interval = intervals[counts.index(max(counts))]
    
    # Correct the sequence
    result = []
    
    if interval_list[0] == interval:
        
        for i in range(len(sequence)):
            result.append((sequence[0] + (interval * i)))
            
    if interval_list[0] != interval:
        
        for i in range(len(sequence)):
            result.insert(0, (sequence[-1] - (interval * i)))

    return result

# Top solution
# Assume the first interval is correct, calculate a new sequence, then compare to original counting matched values.
# If more than one, assume last interval is correct and recalculate from the end.

def repair_sequence(s: list[int]) -> list[int]:
    n = len(s)
    xs = [s[0] + (s[1] - s[0]) * i for i in range(n)]
    return xs if sum(a != b for a, b in zip(s, xs)) <= 1 else [s[-1] - (s[-1] - s[-2]) * i for i in range(n - 1, -1, -1)]