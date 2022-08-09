
""" 
def greet():
    name = "Magesh"
    print(f"Hi {name}, Have a nice day")

greet()
"""

#parameters
def greet(name):
    print(f"Hi {name}, Have a nice day")

greet('Magesh')

#named arguments
greet(name='Magesh')

""" 
def divide(no, divisor):
    print(no / divisor)

divide(100,7)
divide(divisor=7, no=100)
"""

""" 
def divide(no, divisor):
    return (no / divisor)

print(divide(100,7)) 
"""

def divide(no, divisor):
    quotient = no // divisor
    remainder = no % divisor
    return quotient, remainder

q, _ = divide(100,7)
print(q)

#default arguments
def add(x, y=10):
    return x + y

print(add(10,20))
print(add(10))
print(add(x=10))
print(add(x=10, y=20))

#function with no body
def fn():
    pass
    print("fn")

fn()