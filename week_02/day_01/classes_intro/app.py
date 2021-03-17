from src.bank_account import *

# account = {
# 'holder_name': 'John',
# 'balance': 500,
# 'type': 'business',
# }

account = BankAccount('John', 500, 'business')
account2 = BankAccount('Mary', 200, 'personal')

# print(get_holder_name(account))

print(account.holder_name)
print(account2.holder_name)  

# Changing the account details on Account
# As this is an update no () are needed
account.holder_name = 'Ada'
print(account.holder_name) 

# This is running a function so () are needed.
account.pay_in(50)
print(account.balance)

# Run function
account.pay_monthly_fee()

# Print the Balance of account
print(account.balance)

# Exercise 1
account2.pay_monthly_fee()
print(account2.balance)


