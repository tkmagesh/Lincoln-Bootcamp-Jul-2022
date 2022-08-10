
class BankAccount:

    def __init__(self, name):
        self.name = name
        self.balance = 0
        print('a new bank account is created')

    def who_am_i(self):
        print(f"I am the bank account for {self.name}")

    """ 
        implement deposit and withdraw methods
        deposit - negative values should not be allowed
        withdraw - cannot withdraw more than the balance
     """


account = BankAccount('Magesh')
account.who_am_i()
print(f"account balance of {account.name} = {account.balance}")