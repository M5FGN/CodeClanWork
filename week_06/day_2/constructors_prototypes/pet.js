// Task: (15 minutes)
// Create a new file - pet.js
// Create a Pet constructor
// Assign values to the following properties in your Pet constructor via parameters:
// name
// species
// Add an eat method to your Pet's prototype. This method should accept a food parameter and output a string containing the name property and the food that was eaten. For example: 'Scooby Doo ate a Scooby Snack'.

const Pet = function(name, species) {
    this.name = name;
    this.species = species;
}

Pet.prototype.greet = function() {
    console.log(`${this.name} is a ${this.species}`)
}

Pet.prototype.eat = function(food) {
    console.log(`${this.name} ate ${food}`)
}

module.exports = Pet;


// The Code below should be in a diffrent file - only setUp info should be in here.
// const calypso = new Pet('Calypso', 'cat')
// calypso.greet();
// calypso.eat('tuna')

// const pepsi = new Pet('Pepsi', 'cat')
// pepsi.greet();
// pepsi.eat('cookies')