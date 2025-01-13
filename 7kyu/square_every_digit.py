# My solution
def square_digits(num):
    return int(''.join(str(x) for x in [int(y) ** 2 for y in list(str(num))]))

# Top rated
def square_digits(num):
    ret = ""
    for x in str(num):
        ret += str(int(x)**2)
    return int(ret)

# Similar to mine
def square_digits(num):
    return int(''.join(str(int(d)**2) for d in str(num)))