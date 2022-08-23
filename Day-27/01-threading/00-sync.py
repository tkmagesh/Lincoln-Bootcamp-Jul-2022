import time
import threading

def myfunc(name):
    print(f'myfunc started - {name}')
    time.sleep(10)
    print('myfunc completed')

if __name__ == '__main__':
    print('main started')
    myfunc('Python')
    print('main completed')