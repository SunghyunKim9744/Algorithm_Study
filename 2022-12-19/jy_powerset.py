def power_set(idx, material, score, cal, l, n):
    if cal > l:
        return -1
    
    if idx == n:
        return score
    
    max_score = 0
    max_score = max(max_score, power_set(idx + 1, material, score + material[idx]["score"], cal + material[idx]["cal"], l, n))
    max_score = max(max_score, power_set(idx + 1, material, score, cal, l, n))
    return max_score

T = int(input())

for test_case in range(1, T + 1):
    n, l = map(int, input().split())
    
    material = []
    for _ in range(n):
        t, k = map(int, input().split())
        material.append({
            "score": t,
            "cal": k
        })
    
    answer = power_set(0, material, 0, 0, l, n)
    print("#" + str(test_case), answer)
    