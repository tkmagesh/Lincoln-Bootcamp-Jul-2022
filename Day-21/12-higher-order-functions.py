
#functions can be assigned to variables
def fn():
    print('fn')

x = fn
x()

#functions can be passed as arguments
def exec(f):
    f()
    print("the given function executed")

exec(fn)

#functions can be returned as return values
def outer():
    def inner():
        print('inner function invoked')
    return inner

inner_fn = outer()
inner_fn()

def adder(x):
    def add(y):
        return x + y
    return add

adder_with_10 = adder(10)
print(adder_with_10(20))

