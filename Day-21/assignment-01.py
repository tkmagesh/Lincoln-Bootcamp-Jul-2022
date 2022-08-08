
while True:
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Divide")
    print("5. Exit")
    user_choice = int(input("Enter you choice : "))
    if user_choice == 5:
        break
    if user_choice < 1 or user_choice > 5:
        print("invalid choice")
        continue
    n1 = int(input("Enter value 1 : "))
    n2 = int(input("Enter value 2 : "))
    if user_choice == 1:
        result = n1 + n2
        print(result)
    elif user_choice == 2:
        result = n1 - n2
        print(result)
    elif user_choice == 3:
        result = n1 * n2
        print(result)
    elif user_choice == 4:
        result = n1 / n2
        print(result)
