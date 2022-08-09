#refactored assignment-01

add = lambda x, y: x + y
subtract = lambda x, y: x - y
multiply = lambda x, y: x * y
divide = lambda x, y: x / y

operations = { '1' : add, '2' : subtract, '3' : multiply, '4' : divide }

def get_operands():
    n1 = int(input("Enter value 1 : "))
    n2 = int(input("Enter value 2 : "))
    return n1, n2

def get_user_choice():
    print("""
1. Add
2. Subtract
3. Multiply
4. Divide
5. Exit
    """)
    user_choice = input("Enter you choice : ")
    return user_choice


def run():
    while True:
        user_choice = get_user_choice()
        if user_choice == '5':
            break
        if user_choice not in operations:
            print("invalid choice")
            continue
        n1, n2 = get_operands()
        result = operations[user_choice](n1, n2)
        print(result)
    print("Thank you")


run()
    
