nos = [1, 2, 3, 4, 5]

double_nos = []
for no in nos:
    double_nos.append(no * 2)

[no for no in nos]

[no*2 for no in nos]

[f"double of {no} is {no*2}" for no in nos]

[no for no in nos if no % 2 == 0]

[no*2 for no in nos if no % 2 == 0]

{no*2 for no in nos if no % 2 == 0}

tuple(no*2 for no in nos if no % 2 == 0)

       
product_names = ['Pen', 'Pencil', 'Marker']
product_ranks = [3, 1, 2]
products = {product_names[i]: product_ranks[i] for i in range(len(product_names))}
