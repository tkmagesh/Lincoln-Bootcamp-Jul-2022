import functools
import time

def log(fn):
    @functools.wraps(fn)
    def log_fn(*args):
        print('invocation started')
        result = fn(*args)
        print('invocation completed')
        return result
    return log_fn


""" 
def fn():
    print('fn invoked')

logged_fn = log(fn)
logged_fn() 
"""

""" 
@log
def fn():
    print('fn invoked')

fn()
print('name of fn is ', fn.__name__)

@log
def add(x,y):
    return x + y

print(add(100,200)) 
"""

""" docorator use cases """

def record_time(fn):  
    @functools.wraps(fn)
    def time_wrapper(*args, **kwargs):
        print('timing starts')
        start = time.perf_counter()
        result = fn(*args, **kwargs)
        end = time.perf_counter()
        time_taken = end - start
        print(f"Finished {fn.__name__} in {time_taken:.4f} seconds")
        print('timing ends')
    return time_wrapper

@log
@record_time
def do_something(no_times):
    for _ in range(no_times):
        sum([i ** 2 for i in range(10000)])

do_something(1000)


#decorator for logging function invocations
def debug(func):
    """Print the function signature and return value"""
    @functools.wraps(func)
    def wrapper_debug(*args, **kwargs):
        args_repr = [repr(a) for a in args]                      # 1
        kwargs_repr = [f"{k}={v!r}" for k, v in kwargs.items()]  # 2
        signature = ", ".join(args_repr + kwargs_repr)           # 3
        print(f"Calling {func.__name__}({signature})")
        value = func(*args, **kwargs)
        print(f"{func.__name__!r} returned {value!r}")           # 4
        return value
    return wrapper_debug

@debug
def add(x, y):
    return x + y


result = add(100,200, key1 = 100, key2 = 200)
print('result of adding 100 and 200 is ', result)