
def odds(start, stop):
    for odd in range(start, stop+1, 2):
        yield odd


def main():
    g = odds(11,20)
    """ 
    print(next(g))
    print(next(g))
    print(next(g)) 
    """
    for no in g:
        print(no)

    list_no = list(g)
    tuple_no = tuple(g)
    