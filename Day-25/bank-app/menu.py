from bank import InvalidAmount, InsufficientBalance

class Menu:

    def __init__(self, account):
        self._account = account

    def run(self):
        while True:
            user_action = input(
                '''
    What operation would you like to do:
    1. Deposit an amount into your account
    2. Withdraw an amount from your account
    3. Retrieve current balance
    4. See previous transactions
    5. Close Application
'''
            )
            try:
                if int(user_action) < 1 or int(user_action) > 5:
                    print('Invalid option was selected')
                else:
                    if user_action == '1':
                        amount = int(input('Enter the amount of money you wish to deposit: '))
                        self._account.deposit(amount)
                    elif user_action == '2':
                        amount = int(input('Enter amount you wish to withdraw: '))
                        self._account.withdraw(amount)

                    elif user_action == '3':
                        print(f"Your current account balance = {self._account.balance}")

                    elif user_action == '4':
                        __transactions = self._account.history()
                        print('Previous Transactions: \n')
                        for row in __transactions:
                            print(f"{row[0]} with amount {row[1]} was done at {row[2]}")
                    elif user_action == '5':
                        print('Thank you!')
                        exit()
            except InvalidAmount:
                print('Attempted to deposit invalid amount')
            except InsufficientBalance:
                print('Not enough funds for doing that withdraw')
