
// Similar to Python's __init__
const Person = function (name, pet) {
    this.name = name;
    this.pet = pet;
    
    // this.greet = function () {
    //     console.log(`Hi, My name is ${this.name}`)
    // }
}

// The greet function outside of the const Person is better practice as it takes less memory.
// Any Person object made with the Person class can access these functions
Person.prototype.greet = function(){
    console.log(`Hi! My Name is ${this.name}`)
}

Person.prototype.feedPet = function(food) {
    const message = `${this.name} fed ${this.pet} a ${food}`;
    console.log(message)
    this.pet.eat(food);
}

module.exports = Person;

// The Code below should be in a diffrent file - only setUp info should be in here.
// const shaggy = new Person('Shaggy Rodgers');
// shaggy.greet();

// const velma = new Person('Velma Dinkley');
// velma.greet();

// console.log('shaggy:', shaggy)
// console.log('velma:', velma)