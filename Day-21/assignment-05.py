#refactored assignment-01

add = lambda x, y: x + y
subtract = lambda x, y: x - y
multiply = lambda x, y: x * y
divide = lambda x, y: x / y
power = lambda x, y : x ** y
is_even = lambda x : x % 2 == 0
is_odd = lambda x : x % 2 != 0

operations = { }

def get_operands(no_operands):
    return (int(input(f"Enter value {i+1} : ")) for i in range(no_operands))

def do_operation(op, no_operands):
    data = get_operands(no_operands)
    result = op(*data)
    print(result)

def op_exit():
    exit()

def load_operations():
    operations['1'] = {'menu': 'Add', 'operation' : lambda : do_operation(add, 2)} 
    operations['2'] = {'menu': 'Subtract', 'operation': lambda : do_operation(subtract, 2)}
    operations['3'] = {'menu': 'Multiply', 'operation': lambda : do_operation(multiply, 2)}
    operations['4'] = {'menu': 'Divide', 'operation': lambda : do_operation(divide, 2)}
    operations['5'] = {'menu': 'Power', 'operation': lambda : do_operation(power, 2)}
    operations['6'] = {'menu' : 'Modulus', 'operation': lambda: do_operation(lambda x,y : x % y, 2)}
    operations['7'] = {'menu' : 'Check Even', 'operation': lambda: do_operation(is_even, 1)}
    operations['8'] = {'menu' : 'Check Odd', 'operation': lambda: do_operation(is_odd, 1)}
    operations['9'] = {'menu' :'Exit', 'operation' : op_exit}

def get_user_choice():
    for op in operations:
        print(f"{op}. {operations[op]['menu']}")
    user_choice = input("Enter you choice : ")
    return user_choice


def run():
    load_operations()
    while True:
        user_choice = get_user_choice()
        if user_choice not in operations:
            print("invalid choice")
            continue
        operations[user_choice]['operation']()
    


run()
    
