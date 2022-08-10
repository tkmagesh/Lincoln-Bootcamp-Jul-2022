

#filter
def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, n // 2):
        if n % i == 0:
            return False
    return True

primes = list(filter(is_prime, range(2,51)))


#map
product_names = ['Pen', 'Pencil', 'Marker']

list(map(lambda p: len(p), product_names))

list(map(len, product_names))

list1 = [2,3,4]
list2 = [4,2,3]
list(map(lambda x, y: x * y, list1, list2))

