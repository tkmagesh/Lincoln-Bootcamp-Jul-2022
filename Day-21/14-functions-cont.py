
""" 
def add(x,y):
    return x + y 
"""


def fn(*args):
    print(type(args))
    print(args)


def add(x, y, *args):
    print(x, y, args)


data = [10,20,30,40,50,60]
add(*data)


def fn(**kwargs):
    print(kwargs)
    print(type(kwargs))


def fn(x,y, *args, **kwargs):
    pass
