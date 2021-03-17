class PetShop:
    
    def __init__(self, name, pets, total_cash):
        self.name = name
        self.pets = pets
        self.total_cash = total_cash
        self.pets_sold = 0

    def stock_count(self):
        return len(self.pets)

    def increase_pets_sold(self):
        # When a pet is sold the number of pets_sold is increased by one
        self.pets_sold += 1
    
    def increase_total_cash(self, amount):
        self.total_cash += amount

    def remove_pet(self, pet_to_remove):
        self.pets.remove(pet_to_remove)

    def find_pet_by_name(self, pet_name):
        for pet in self.pets:
            if pet.name == pet_name:
                # Return the full pet information - not just the pet name - this 
                # means at a later time (if necessary) you can use this information to pull out 
                # further information ie price etc.
                return pet

    def sell_pet_to_customer(self, pet_name, customer):
        # self.find_pet_by_name() will look inside this class for the method
        pet = self.find_pet_by_name(pet_name)
        # reduce_cash and add_pet methods are being called from the customer class.
        customer.reduce_cash(pet.price)
        customer.add_pet(pet)
        self.increase_total_cash(pet.price)
        self.increase_pets_sold()
        self.remove_pet(pet)