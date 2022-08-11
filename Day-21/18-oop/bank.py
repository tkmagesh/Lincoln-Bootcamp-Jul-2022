

class BankAccount:

    def __init__(self, name, initial_balance):

        self.name = name  
        self.__balance = initial_balance  # __ makes the attribute private
        print('a new bank account is created')

    def who_am_i(self):
        print(f"I am the bank account for {self.name}")

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
        else:
            print('Cannot deposit negative amount')

    def withdraw(self, amount):
        if amount <= self.__balance:
            self.__balance -= amount
        else:
            print('Cannot withdraw more than the balance')

    @property
    def balance(self):
        return self.__balance

    @balance.setter
    def balance(self, amount):
        self.__balance = amount 

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


""" class BankAccount:

    def __init__(self, name):

        self.name = name
        self.__balance = 0  # __ makes the attribute private
        print('a new bank account is created')

    def who_am_i(self):
        print(f"I am the bank account for {self.name}")

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
        else:
            print('Cannot deposit negative amount')

    def withdraw(self, amount):
        if amount <= self.__balance:
            self.__balance -= amount
        else:
            print('Cannot withdraw more than the balance')

    
    def get_balance(self):
        print('get_balance triggered')
        return self.__balance
    
    def set_balance(self, amount):
        print('set_balance triggered')
        self.__balance = amount

    balance = property(get_balance, set_balance)
 """

if (__name__ == '__main__'):
    account = BankAccount('Magesh')
    """ 
    account.who_am_i()
    #print(f"account balance of {account.name} = {account.get_balance()}")
    print(f"account balance of {account.name} = {account.balance}")
    account.deposit(100)
    account.deposit(200)
    # print(f"account balance of {account.name} = {account.get_balance()}")
    print(f"account balance of {account.name} = {account.balance}")
    account.balance = 1000
    account.withdraw(400)
    # print(f"account balance of {account.name} = {account.get_balance()}")
    print(f"account balance of {account.name} = {account.balance}") 
    """
    print(account.balance)
    account.balance = 1000
