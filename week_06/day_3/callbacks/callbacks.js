// Example of a Higher order function - a function which takes in a function
// This will run the function but after 5 seconds (5000ms = 5s)
// setTimeout(function(){
//     console.log('This is the function being run!')
// }, 5000);

const myNumbers = [1,2,3,4,5];

// Basic for loop
for (const number of myNumbers) {
    console.log(`This is the number ${number}`);
}

// For Each = standard for loop - does the same as the basic for loop above but is more streamlined.
// Uses an arrow function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
myNumbers.forEach((number, index, numbers) => {
    console.log(`This is the number ${number} at ${index} in array ${numbers}`)
})

const numTimes2 = [];
myNumbers.forEach((number) => {
    numTimes2.push(number * 2);
})

console.log(numTimes2)

// FixMe Doesn't work
const multiplyByTwo = function (numbers) {
    const numTimes2 = [];
myNumbers.forEach((number) => {
    numTimes2.push(number * 2);
})
    return numTimes2;
}

const result = (multiplyByTwo([6,7,8,9,10]))
console.log('Multiply by 2', result);
