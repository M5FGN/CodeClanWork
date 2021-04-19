// Task: (10 minutes)

// 1) Using the forEach method, complete the following tasks:
// Write a function called getEvens that takes an array of numbers as an argument and returns a new array that only contains the even numbers from the original array.

// 2) Write a function called sumElements that takes an array of numbers as an argument and returns the sum total of all the elements in the array.
// Hint: If you get stuck, start by writing the function using a for of loop, then refactor, replacing the for loop with the forEach.

// Initial Solution 
inNumbers = [1,2,3,4,5,6,7,8,9]
const getEvens = [];
    inNumbers.forEach(number => {
        if (number % 2 == 0) {
            getEvens.push(number);
        } 
        return getEvens;
    });
    console.log(getEvens)    

// Fixme - Inside a function 
const getEvens = function (inNumbers) {
    const getEvens = [];
    inNumbers.forEach(number => {
        if (number % 2 == 0) {
            getEvens.push(number);
        } 
        return getEvens;
    });
    console.log(getEvens) 
}

// Initial Solution
let sumElements = 0;
    inNumbers.forEach(number => {
        sumElements += number;
    })
    console.log(sumElements);


// Todo - Inside a function