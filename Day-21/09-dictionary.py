#Dictionary
#Creating a dictionary
product_ranks = {'Pen': 4, 'Pencil': 1, 'Marker': 2, 'Charger': 3}
type(product_ranks)

#Accessing the values
product_ranks['Pen']
product_ranks.get('Pen')

#Get all the keys
product_ranks.keys()

#Get all the values
product_ranks.values()

#Get the keys & values
product_ranks.items()

#Updating the value of 1 key
product_ranks['Notebook'] = 5
product_ranks['Pen'] = 10

#Updating more than one key
product_ranks.update({'Marker': 20, 'Charger': 30})

#removing a key
product_ranks.pop('Marker')

#Check for the existence of a key
'Pen' in product_ranks
True
'Marker' in product_ranks
False

#Removing a key/value pair
del product_ranks['Pen']

#Deleting a dictionary
del product_ranks

#Iterating a dictionary
product_ranks = {'Pen': 4, 'Pencil': 1, 'Marker': 2, 'Charger': 3}
for x in product_ranks:
    print(x)

#Iterating the values
for x in product_ranks.values():
    print(x)


product_ranks.items()

for key, val in product_ranks.items():
    print(key, val)

#Creating a copy of the dictionary
dup_product_ranks = product_ranks.copy()

#using setdefault
product_ranks.setdefault('Marker', 100)
