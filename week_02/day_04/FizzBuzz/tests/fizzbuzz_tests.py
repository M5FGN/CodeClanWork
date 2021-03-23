import unittest

from src.fizzbuzz import fizzbuzz

class TestFizzBuzz(unittest.TestCase):

    def test_fizzbuzz__6_is_divisable_by_3(self):
        self.assertEqual("Fizz", fizzbuzz(6))
    
    def test_fizzbuzz__10_is_divisable_by_5(self):
        self.assertEqual("Buzz", fizzbuzz(10))
    
    def test_fizzbuzz__15_is_divisable_by_3_and_5(self):
        self.assertEqual("FizzBuzz", fizzbuzz(15))

    def test_fizzbuzz__7_is_string(self):
        self.assertEqual("7", fizzbuzz(7))
    
