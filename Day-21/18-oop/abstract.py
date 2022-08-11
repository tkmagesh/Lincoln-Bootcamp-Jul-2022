
from abc import ABC, abstractmethod

# abstract base class
# instances cannot be created

class Employee(ABC): 
    def __init__(self, name):
        self.name = name

    @abstractmethod
    def calculate_salary():
        pass


# derived from the abstract base class (Employee)
# expected to have the implementations for the abstract methods defined in the base class
class FullTimeEmployee(Employee):

    def __init__(self, name, salary):
        super().__init__(name)
        self.salary = salary
     
    def calculate_salary(self):
        return self.salary 
    


if __name__ == '__main__':
    """ 
    e = Employee('Magesh')
    print(e.name) 
    """
    fte = FullTimeEmployee('Magesh', 10000)
    print(fte.calculate_salary())