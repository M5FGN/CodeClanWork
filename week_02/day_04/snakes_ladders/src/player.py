class Player:

    def __init__(self, name, counter, age):
        self.name = name
        self.couter = counter
        self.age = age
    
    def roll_dice(self, dice):
        return dice.get_number()

    def move(self, number_of_squares):
        self.counter.update.position(number_of_squares)