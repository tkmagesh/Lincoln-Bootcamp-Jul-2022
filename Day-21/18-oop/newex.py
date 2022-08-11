

from random import choice


class Pet(object):
    def __new__(cls):
        animals = [Dog, Cat, Python]
        animal = choice(animals)
        instance = super().__new__(animal)
        print(f"I am a {type(instance).__name__}!")
        return instance

class Dog:
    def communicate(self):
        print('woof')

class Cat:
    def communicate(self):
        print('mew')

class Python:
    def communicate(self):
        print('hiss')
