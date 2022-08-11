
from functools import reduce

class InvalidAmountException(Exception):
    pass

class InsufficientBalanceException(Exception):
    pass

class BankAccount:

    __account_count = 0 #class member OR static member

    def __init__(self, name, initial_balance):
        self.name = name  
        self.__transactions = tuple()
        #self.__balance = initial_balance  # __ makes the attribute private
        self.deposit(initial_balance)
        print('a new bank account is created')
        self.__class__.__account_count += 1

    def who_am_i(self):
        print(f"I am the bank account for {self.name}")

    def deposit(self, amount):
        if amount > 0:
            self.__transactions += (('deposit', amount),)
        else:
           raise InvalidAmountException()

    def withdraw(self, amount):
        if amount <= self.balance:
            self.__transactions += (('withdraw', amount),)
        else:
            raise InsufficientBalanceException()
       
    def history(self):
        print(self.__transactions) 
   

    @property
    def balance(self):
        return reduce(lambda result, txn: (result + txn[1]) if txn[0] == 'deposit' else (result - txn[1]), self.__transactions, 0)

    """ 
    @balance.setter
    def balance(self, amount):
        self.__balance = amount  
    """

    #dunder methods
    def __str__(self):
        print('__str__ method invoked')
        return f"{self.name} balance={self.balance}"

    def __repr__(self):
        return f"{self.__class__.__name__}({self.name!r} , {self.balance!r})"

    def __eq__(self, other):
        return (self.name == other.name) and (self.balance == other.balance)


    def __add__(self, other):
        return BankAccount(f"{self.name} {other.name}", self.balance + other.balance)

    def __len__(self):
        return len(self.__transactions)

    def __getitem__(self, key):
        return self.__transactions[key]

    @classmethod
    def get_account_count(cls):
        return cls.__account_count

  
if (__name__ == '__main__'):
    try:
        account = BankAccount('Magesh', 100)
        account.deposit(100)
        account.withdraw(50)
        #account.withdraw(500) # expected to raise an exception
        account.deposit(-200)
        account.history()
        print(f"balance = {account.balance}")
        print(f"# of transactions = ", len(account))

        print(f"transaction[0] = {account[0]}")
        print(f"transaction[1:3] = {account[1:3]}")

        account2 = BankAccount('Alex', 10000)
        print(f"balance = {account.balance}")
        print(f"# of accounts = {BankAccount.get_account_count()}")
    except InvalidAmountException:
        print('invalid amount deposited')
    except InsufficientBalanceException:
        print('Not enough balance to withdraw')
    else:
        print('transactions are successful')
    finally:
        print('Thank you!')
