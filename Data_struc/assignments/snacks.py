y = [3, 2, 1]
f = [4, 5, 6]
v = [50, 8, 13]


sums = []
for coin in y:
    for yourcoin in f:
        sums.append(coin + yourcoin)

can_eat = False
for sum in sums:
    for price in v:
        if sum == price:
            can_eat = True

print(can_eat)