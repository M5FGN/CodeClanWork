class Customer:
    def __init__(self, name, cash):
        self.name = name
        self.cash = cash
        self.pets = []

    def reduce_cash(self, amount):
        # Takes the value in cash and subtracts the amount passed in
        self.cash -= amount 

    def pet_count(self):
        # Returns the number of pets on the pets list
        return len(self.pets)

    def add_pet(self, new_pet):
        # new_pet is a pet object being passed in by the test (self.pet).
        self.pets.append(new_pet)

    def get_total_value_of_pets(self):
        total = 0
        for pet in self.pets:
            # pet.price is being taken from the pet object which is in the pet class (in another file) and not self.
            total += pet.price
        return total