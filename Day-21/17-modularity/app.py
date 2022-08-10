""" 
import calc

print(calc.add(100,200))
print(calc.subtract(100,200)) 
"""

""" 
from calc import add
print(add(100,200)) 
"""

""" 
from calc import add, subtract
print(add(100,200))
print(subtract(100,200))  
"""

""" 
from calc import *

print(add(100,200))
print(subtract(100,200)) 
print(multiply(100,200))
print(divide(100,5)) 
"""

""" 
from calc import add as add_numbers

print(add_numbers(100,200)) 
"""


""" 
from calc import *
from my_math import *

print(add(100,200,300)) 
"""

""" 
import calc as my_calc
print(my_calc.add(100,200)) 
"""

""" 
import pkg.calc
print(pkg.calc.add(100,200)) 
"""

""" 
from pkg.calc import add
print(add(100,200)) 
"""

""" 
from pkg import calc
print(calc.add(100,200)) 
"""
""" 
from pkg import calc, utils
print(calc.add(100,200))
print(utils.is_even(11))
 """


from pkg import * # using the __all__ in the __init__.py file
print(calc.add(100,200))
print(utils.is_even(11))
