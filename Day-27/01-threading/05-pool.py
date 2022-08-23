import time
import concurrent.futures

def myfunc(name):
    print(f'myfunc started - {name}')
    time.sleep(5)
    print('myfunc completed')

if __name__ == '__main__':
    print('main started')
    
    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:
        pool.map(myfunc, ['Thread-1', 'Thread-2', 'Thread-3'])

    print('main completed')