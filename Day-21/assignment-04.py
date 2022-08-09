

def add(x,y):
    print('invocation started')
    result = x + y
    print('invocation completed')
    return result

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    return x / y


def process(x,y):
    print(add(x,y))
    print(subtract(x,y))
    print(multiply(x,y))
    print(divide(x,y))

process(100,200)