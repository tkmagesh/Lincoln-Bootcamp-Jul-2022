
from csvstorage import CSVStorage
from bank import BankAccount
from menu import Menu

if __name__ == '__main__':
    storage = CSVStorage('transactions.csv')
    account = BankAccount('Magesh', storage)
    menu = Menu(account)
    menu.run()