#refactored assignment-01

add = lambda x, y: x + y
subtract = lambda x, y: x - y
multiply = lambda x, y: x * y
divide = lambda x, y: x / y
power = lambda x, y : x ** y
is_even = lambda x : x % 2 == 0
is_odd = lambda x : x % 2 != 0

operations = { }

def get_operands():
    n1 = int(input("Enter value 1 : "))
    n2 = int(input("Enter value 2 : "))
    return n1, n2

def do_operation(op):
    data = get_operands()
    result = op(*data)
    print(result)

def op_exit():
    exit()

def load_operations():
    operations['1'] = {'menu': 'Add', 'operation' : lambda : do_operation(add)} 
    operations['2'] = {'menu': 'Subtract', 'operation': lambda : do_operation(subtract)}
    operations['3'] = {'menu': 'Multiply', 'operation': lambda : do_operation(multiply)}
    operations['4'] = {'menu': 'Divide', 'operation': lambda : do_operation(divide)}
    operations['5'] = {'menu': 'Power', 'operation': lambda : do_operation(power)}
    operations['6'] = {'menu' : 'Modulus', 'operation': lambda: do_operation(lambda x,y : x % y)}
    operations['7'] = {'menu' : 'Check Even', 'operation': lambda: do_operation(lambda x,y : x % y)}
    operations['8'] = {'menu' : 'Check Odd', 'operation': lambda: do_operation(lambda x,y : x % y)}
    operations['8'] = {'menu' :'Exit', 'operation' : op_exit}

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
    
