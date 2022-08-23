import time
import concurrent.futures
import threading

class Account:
    def __init__(self):
        self.balance = 100
        self.lock = threading.Lock()

    def update(self, transaction, amount):
        print(f'{transaction} thread updating..')
        self.lock.acquire()
        local_copy = self.balance
        local_copy += amount
        time.sleep(5)
        self.balance = local_copy
        self.lock.release()
        print(f'{transaction} thread completed..')

if __name__ == '__main__':
    account = Account()
    print(f'starting with the balance of {account.balance}')
    with concurrent.futures.ThreadPoolExecutor(max_workers=2) as ex:
        for transaction, amount in [('deposit', 50), ('withdraw', -150)]:
            ex.submit(account.update, transaction, amount)
    print(f'ending with the balance of {account.balance}')
