"""
user_input = input("Do you wish to run this program? (yes/no) : ")
while user_input == "yes":
    print("program executed")
    user_input = input("Do you wish to run this program? (yes/no) : ")

print("Thank you!")

"""

do_loop = True
while do_loop:
    user_choice = input("Do you want to break (y/n) : ")
    if user_choice == 'y':
        break
    user_choice = input("Do you want to continue (y/n) : ")
    if user_choice == 'y':
        continue
    else:
        break

print("Thank you!")
