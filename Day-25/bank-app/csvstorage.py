import csv
from datetime import datetime
import os

fieldnames = ['transaction-type', 'amount', 'date']

class CSVStorage:

    def __init__(self, file):
        self.__file = file
        self.__fieldnames = ['transaction-type', 'amount', 'date']
        file_exists = os.path.isfile(self.__file)
        if not file_exists:
            with open(self.__file, 'a+', newline='') as csvfile:
                writer = csv.DictWriter(self.__file, fieldnames=self.__fieldnames)
                writer.writeheader()
                csvfile.close()

    def get_transactions(self):
        transactions = ()
        with open(self.__file, 'r', newline='') as csvfile:
            rows = csv.DictReader(csvfile)
            for row in rows:
                # returning data as a tuple of tuples
                transactions += ((row['transaction-type'],
                                row['amount'], row['date']), )
                #so that they are back in a non mutable form!! Do not want users to be able to change the data somehow!
                #print(f"{row['transaction-type']} with amount {row['amount']} was done at {row['date']}")
            
            csvfile.close()
        return transactions

    def save_transaction(self, transaction):
        #open a file in append mode to just append data and not overwrite it!
        with open(self.__file, 'a+', newline='') as csvfile:
            #here we use newline because of not by default a \n is added and hence will have
            #rows that are empty because of the new line!
            writer = csv.DictWriter(csvfile, fieldnames=self.__fieldnames)
            date = datetime.now()

            writer.writerow(
                {'transaction-type': transaction[0], 'amount': transaction[1], 'date': date.strftime("%Y-%m-%d %H:%M:%S")})
            csvfile.close()

