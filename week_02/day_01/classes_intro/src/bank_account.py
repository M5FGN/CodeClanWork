# def get_holder_name(account):
#     return account['holder_name']

class BankAccount:
    def __init__(self, holder_name, balance, account_type):
        # Below is a instance variable
        self.holder_name = holder_name 
        self.balance = balance
        self.account_type = account_type

    def pay_in(self, amount):
        self.balance += amount
    
    # def pay_monthly_fee(self):
    #     self.balance -= 50

    def pay_monthly_fee(self):
        if self.account_type == 'business':
            self.balance -= 50
        elif self.account_type == 'personal':
            self.balance -= 10

