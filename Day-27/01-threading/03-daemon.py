import time
import threading

def myfunc(name):
    print(f'myfunc started - {name}')
    time.sleep(5)
    print('myfunc completed')

if __name__ == '__main__':
    print('main started')
    
    t = threading.Thread(target=myfunc, args=['Python'], daemon=True)
    t.start()
        
    print('main completed')