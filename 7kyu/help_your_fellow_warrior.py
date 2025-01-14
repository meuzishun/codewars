# My solution
def get_honor_path(honor_score, target_honor_score):
    results = {}
    
    if honor_score < target_honor_score:
        diff = target_honor_score - honor_score
        results['1kyus'] = diff // 2
        results['2kyus'] = diff % 2
        
    return results

# Top solution
def get_honor_path(score, target):
    return {'1kyus':(target-score)//2, '2kyus':(target-score)%2} if target > score else {}