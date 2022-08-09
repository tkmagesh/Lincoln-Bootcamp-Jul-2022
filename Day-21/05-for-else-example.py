

for n in range(3):
    password = input("Password : ")
    if password == 'admin_pwd':
        print("Login successful!")
        break
    print("Password is incorrect.")
else:
    print("Attempted 3 times. Suspicious activity.")

