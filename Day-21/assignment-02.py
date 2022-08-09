
no = int(input("Enter the no : "))
for n in range(2, no // 2):
    if no % n == 0:
        print(f"{no} is not a prime")
        break
else:
    print(f"{no} is a prime")
