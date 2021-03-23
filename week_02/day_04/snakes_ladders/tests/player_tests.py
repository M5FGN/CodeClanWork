import unittest

from src.player import Player
from src.counter import Counter
from src.dice import Dice

class TestPlayer(unittest.TestCase):

    def setUp(self):
        counter = Counter("Yellow")
        self.player = Player("Barnaby Jones", counter, 43)
    
    def test_player_has_name(self):
        self.assertEqual('Barnaby Jones', self.player.name)

    def test_player_age(self):
        self.assertEqual(43, self.player.age)

    # def test_player_has_counter(self):
    #     self.assertEqual(0, self.player.counter.position)

    def test_player_can_roll_dice(self):
        dice = Dice(5)
        numbers = range (1,7)
        self.assertIn(self.player.roll_dice(dice), numbers)

    # def test_player_can_move_counter(self):
    #     self.player.move(7)
    #     self.assertEqual(7,self.player.counter.position)
    
