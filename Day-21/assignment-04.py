

def add(x,y):
    result = x + y
    return result

""" 
def log_add(x,y):
    print('invocation started')
    result = add(x,y)
    print('invocation completed')
    print(result) 
"""

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    return x / y


""" 
def log_operation(operation, x, y):
    print('invocation started')
    result = operation(x, y)
    print('invocation completed')
    print(result) 
"""

def log(operation):
    def logOperation(x,y):
        print('invocation started')
        result = operation(x, y)
        print('invocation completed')
        print(result)
    return logOperation

log_add = log(add)
log_subtract = log(subtract)
log_multiply = log(multiply)
log_divide = log(divide)


def process(x,y):
    #log_add(x,y)
    """ 
    log_operation(add, 100, 200)
    log_operation(subtract, 100, 200)
    log_operation(multiply, 100, 200)
    log_operation(divide, 100, 200) 
    """

    
    log_add(100,200)
    log_subtract(100, 200)
    log_multiply(100, 200)
    log_divide(100, 200)
    
    """ 
    print(subtract(x,y))
    print(multiply(x,y))
    print(divide(x,y)) 
    """

process(100,200)