# My solution
def bouncing_ball(h, bounce, window):
    if h <= 0:
        return -1
    
    if bounce <= 0 or bounce >= 1:
        return -1
    
    if window >= h:
        return -1
    
    count = 1
    
    h *= bounce
    
    while h > window:
        count += 2
        h *= bounce

    return count

'''
Parameters: 3 floats
Return: an integer
Examples:
    bouncing_ball(2, 0.5, 1) => 1
    bouncing_ball(3, 0.66, 1.5) => 3
    bouncing_ball(30, 0.66, 1.5) => 15
    bouncing_ball(30, 0.75, 1.5) => 21
Pseudocode:
    initialize count to 1 (no matter what mom sees the ball once)
    while h >= window
        count += 2
        h *= bounce
    return count
'''

# Top solution
def bouncingBall(h, bounce, window):
    if not 0 < bounce < 1: return -1
    count = 0
    while h > window:
        count += 1
        h *= bounce
        if h > window: count += 1
    return count or -1