def log(fn):
    def log_fn():
        print('invocation started')
        fn()
        print('invocation completed')
    return log_fn


""" 
def fn():
    print('fn invoked')

logged_fn = log(fn)
logged_fn() 
"""

@log
def fn():
    print('fn invoked')

fn()


@log
def add(x,y):
    return x + y

print(add(100,200))
