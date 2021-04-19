// Finished

// 1. Declare a named function that takes an array of numbers, and returns the sum, or total, of all of the numbers in the array.

function totalnumberarray(numbers) {
    total = 0;
    for (let x of numbers) {
        total = total + x;
    }
    return total;
} 
console.log(totalnumberarray([1,3,5,7,9]))

// 2. Define an anonymous function expression that takes two arguments:
// - an object, for example, { name: 'Wojtek', age: 30 }
// - a string, for exmaple, 'name'
// Your function should return true if the given string is a key on the given object and false if the object does not have a key that matches the string. Store this function in an appropriately named variable to invoke it.

person = {
    name: 'Wojtek', 
    age: 30,
};
// Logs all info about person
console.log(person);

// checks the searchString passed in to see if it is a key name and only prints out the string for the matched key if there is one.
const comparison = function(object, searchString) {
    for (let key in object) {
        if (key === searchString) {  
        let value = person[key];
        console.log(`The ${key} is ${value}`)
        }
    }
};

comparison(person, 'age')
