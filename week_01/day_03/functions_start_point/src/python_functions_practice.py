def return_10():
    return 10

def add(a, b):
    return (a + b)

def subtract(a, b):
    return (a - b)

def multiply(a, b):
    return (a * b)

def divide(a, b):
    return (a/b)

def length_of_string(my_string):
    return len(my_string)


def join_string(string_1, string_2):
    return (string_1 + string_2)

def add_string_as_number(number_string_1, number_string_2):
    return (int(number_string_1) + int(number_string_2))


def number_to_full_month_name(month_number):
    months = ["January", 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return months[month_number - 1]

def number_to_short_month_name(month_number):
    short_months = ["Jan", 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return short_months[month_number - 1]

def volume_of_cube(side_length):
    return (side_length ** 3)

def reverse_string(my_string):
    return my_string[::-1]


def calc_celc(fahr):
    celc = (fahr - 32) * (5/9) 
    return celc