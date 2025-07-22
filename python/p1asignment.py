


# 1. Programming Language
# a) Sum of two numbers
print("Enter two numbers to add:")
num1 = float(input("First number: "))
num2 = float(input("Second number: "))
print("Sum is:", num1 + num2)

# b) Menu-driven program
print("\nMenu:")
print("1. Add")
print("2. Subtract")
choice = input("Enter choice (1/2): ")
a = float(input("Enter first number: "))
b = float(input("Enter second number: "))
if choice == '1':
    print("Result:", a + b)
elif choice == '2':
    print("Result:", a - b)
else:
    print("Invalid choice")

# 2. Logic Techniques
# b) Pseudocode for making tea (in comments)
"""
1. Boil water
2. Add tea leaves
3. Add sugar
4. Add milk
5. Boil again
6. Strain tea into cup
"""

# 3. OOPs Concepts
class Vehicle:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

    def display(self):
        print(f"Brand: {self.brand}, Model: {self.model}")

class Car(Vehicle):
    def drive(self):
        print("Car is driving")

class Bike(Vehicle):
    def ride(self):
        print("Bike is riding")

car = Car("Toyota", "Corolla")
bike = Bike("Yamaha", "FZ")
car.display()
car.drive()
bike.display()
bike.ride()

# Method Overriding
class Animal:
    def speak(self):
        print("Animal speaks")

class Dog(Animal):
    def speak(self):
        print("Dog barks")

a = Animal()
d = Dog()
a.speak()
d.speak()

# 4. Bank class showing encapsulation, inheritance, and polymorphism
class Bank:
    def __init__(self, name, balance=0):
        self.__name = name  # Encapsulation
        self.__balance = balance

    def deposit(self, amount):
        self.__balance += amount
        print(f"{amount} deposited. New balance: {self.__balance}")

    def withdraw(self, amount):
        if amount <= self.__balance:
            self.__balance -= amount
            print(f"{amount} withdrawn. New balance: {self.__balance}")
        else:
            print("Insufficient balance")

    def showAccountDetails(self):
        print(f"Account holder: {self.__name}, Balance: {self.__balance}")

class SavingsAccount(Bank):
    def __init__(self, name, balance=0):
        super().__init__(name, balance)

    def withdraw(self, amount):
        print("Processing SavingsAccount withdrawal...")
        super().withdraw(amount)

acc = SavingsAccount("Akash", 1000)
acc.deposit(500)
acc.withdraw(300)
acc.showAccountDetails()