// var

var secretsFunction = function() {
    var pinCode = ([0,0,0,0]);
    // pinCode is inside the function and will be logged.
    console.log('Pin Code inside secrets function:', pinCode);
}
secretsFunction();
// pinCode is now outside of the function and will not be logged.
// Uncomment to test
// console.log('Pin Code outside sectretsFunction:', pinCode);

// var

var secretsFunction = function() {

    pinCode = ([0,0,0,0]);
    // pinCode is inside the function and will be logged.
    console.log('Pin Code inside secrets function:', pinCode);
}
secretsFunction();
// because var/let/const is not used then the variable will be globally scoped - this is not Good Practice
console.log('Pin Code outside sectretsFunction:', pinCode);



var name = 'Mary';

var secretsFunction = function() {

    pinCode = ([0,0,0,0]);
    // pinCode is inside the function and will be logged.
    console.log('Name inside secrets function:', name);
}
secretsFunction();
// because var/let/const is not used then the variable will be globally scoped - this is not Good Practice
// console.log('Name outside sectretsFunction:', name);


var filterNamesByFirstLetter = function (names, letter) {
    var filteredNames = [];
    for (var name of names) {
        if (name[0] === letter) {
            filteredNames.push(name);
        }
    }
    return filteredNames
}

var students = ['Alice', 'Bob', 'Claire', 'Joe', 'Charlie'];
var filteredStudents = filterNamesByFirstLetter(students, 'C');
console.log('filteredStudents:', filteredStudents);

let isItFive = function(number){
    let result;
    if (number === 5) {
        result = true;
    } else {
        result = false;
    }
    return result;
}

let verdict = isItFive(4);
console.log('Verdict:', verdict)