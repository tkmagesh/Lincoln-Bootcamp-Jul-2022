


""" 
try:
    #do something
except:
    #handle the error
else:
    #do what needs to be done if there is no error
finally:
    #any logic that has to be executed irrespective of an error occured or not

#raising an exception
raise Exception('error message')

#custom exceptions
class MyException:
    pass

raise MyException()
"""

#result = 100 / 'abc'

class MyException(Exception):
    pass


def do_something():
    raise MyException()

try:
    result = 100 / 'abc'
    do_something()
except TypeError:
    print('invalid type for division operation')
except MyException:
    print('custom exception raised')
else:
    print('result = ', result)
finally:
    print('divide operation completed')