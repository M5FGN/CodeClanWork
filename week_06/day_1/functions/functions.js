
// Default value being passed in ie 'World' and this is used if no other value is passed in
function sayHello(name = 'World') {
    return `Hello ${name}`;
}
console.log(sayHello('Mary'));
console.log(sayHello());


// Anonymous function expression 

const add = function (first_number , second_number) {
    return first_number + second_number;
}

console.log(add(2,3));


// note Arrow Function

