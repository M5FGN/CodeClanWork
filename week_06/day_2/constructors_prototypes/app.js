const Pet = require('./pet.js');
const Person = require('./person.js');

const scooby = new Pet('Scooby Doo', 'Dog');
scooby.eat('scoobie snack');

const shaggy = new Person('Shaggy Rodgers', scooby);
shaggy.greet();
shaggy.feedPet('Scobbie Snack');


// Task: (15 minutes)
// Assign a pet property in the Person constructor via a parameter
// Add a feedPet method to Person.prototype which:
// Accepts a food parameter
// Outputs a string containing the person and pet's names and the food. For example: 'Shaggy Rogers fed Scooby Doo a Scooby Snack'
// Invokes the pet's eat method and passes the food to it


