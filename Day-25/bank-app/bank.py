#custom exceptions

from datetime import date, datetime
from functools import reduce

class InvalidAmount(Exception):
    pass

class InsufficientBalance(Exception):
    pass


class BankAccount:
    def __init__(self, name, storage):
        self.name = name
        self._storage = storage
        self._transactions = storage.get_transactions()

    def deposit(self, amount):
        if amount < 0:
            raise InvalidAmount()
        else:
            transaction = ('Deposit', amount)
            self._storage.save_transaction(('Deposit', amount))
            self._transactions += ( transaction,)
            

    def withdraw(self, amount):
        if amount > self.__balance:
            raise InsufficientBalance()
        else:
            transaction = ('Withdraw', amount)
            self._storage.save_transaction(transaction)
            self._transactions += (transaction, )

    def history(self):
        return self._transactions

    @property
    def balance(self):
        #using the history to calc the balance!
        result = reduce(lambda result, txn: (result + int(txn[1]))  if txn[0] =='Deposit' else (result - int(txn[1])), self._transactions, 0)
        return result