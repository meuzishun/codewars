# "My" solution... failed at this one... AI had to help :(

def calc_prime_factors(num):
    prime_factors = {}
    factor = 2
    
    while num > 1:
        count = 0
        
        while num % factor == 0:
            num //= factor
            count += 1
            
        if count > 0:
            prime_factors[factor] = count
            
        factor += 1
            
    return prime_factors
    
def merge_factors(old, new):
    for k, v in new.items():
        if k not in old or old[k] < v:
            old[k] = v
            
    return old

def calculate_factors(factors):
    result = 1
    
    for k, v in factors.items():
        result *= k ** v
    
    return result

def candies_to_buy(amount_of_kids_invited):
    prime_factors = {}

    for num in range(2, amount_of_kids_invited + 1):
        local_factors = calc_prime_factors(num)
        prime_factors = merge_factors(prime_factors, local_factors)

    return calculate_factors(prime_factors)

# Top solution without a lib... this broke my brain :(

def candies_to_buy(n):
    xx = 1
    
    for i in range(n):
        x = xx
        
        while xx % (i+1):
            xx += x
            
    return xx

candies_to_buy(6)