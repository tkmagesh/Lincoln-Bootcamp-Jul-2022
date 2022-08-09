#Tuples
#Creating a tuple
products = ('Pen', 'Pencil', 'Marker', 'Scribble-pad', 'Sharpner', 'Notebook')

#Accessing the values
products[0]
products[1]

# Find the number of values
len(products)

# slicing a tuple
products[1:4]

# tuples are immutable
products[0] = 'Fountain-Pen'

#Another way of creating a tuple
natural_nos = 1, 2, 3, 4

#Creating an empty tuple
empty_tuple = ()

# Tuple with one value
no = (2,)

# Unpacking a tuple
pen = ('Pen', 100, 'Stationary')
name, cost, category = pen

#swapping the values 
n1, n2 = [10, 20]
n1, n2 = n2, n1

products = [
    (6,'Pen', 50, 20, 'stationary'),
   	(9,'Ten', 70, 70, 'stationary'),
   	(3,'Len', 60, 60, 'grocery'),
   	(5,'Zen', 30, 30, 'grocery'),
   	(1,'Ken', 20, 80, 'utencil'),
    (7,'Mouse', 100, 20, 'electronics')
]
#find the sum of units
total_units = 0

"""
for product in products:
    total_units += product[2]
"""

""" 
for id, name, cost, units, category in products:
    total_units += units
"""

for _, _, _, units, _ in products:
    total_units += units

