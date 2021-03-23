
def fizzbuzz(fizzbuzz_input):
    if fizzbuzz_input % 3 == 0 and fizzbuzz_input % 5 == 0:
        return 'FizzBuzz'
    elif fizzbuzz_input % 3 == 0:
        return "Fizz"
    elif fizzbuzz_input % 5 == 0:
        return "Buzz"
    else:
        return str(fizzbuzz_input)