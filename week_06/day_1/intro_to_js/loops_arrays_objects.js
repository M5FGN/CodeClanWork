// Array with a list of sports
var sports = ['tennis', 'rugby', 'swimming'];

var numberOfElements =  sports.length;
console.log(numberOfElements); // returns 3

var firstSport = sports[0];
console.log(firstSport); // returns tennis

var secondSport = sports[1];
console.log(secondSport); // returns rugby

// note Adding and removing eloements from the end of an array: .pop and .push

console.log(sports);
sports.push('curling');
console.log(sports);
sports.push('darts');
console.log(sports);

sports.pop();
console.log(sports);

var removedSport = sports.pop();
console.log(removedSport);

// end 


// note - Adding/removing elements to the start of an array: .unshift / .shift

console.log(sports);
sports.unshift('basketball');
console.log(sports);

sports.shift();
console.log(sports);

var removedSportStart = sports.shift();
console.log(sports);
console.log(removedSportStart);

//end

// note Splice - will change the array elements ie add or remove one or multiple elements from a specified position on the array - see MDN notes
     
var newsports = ['tennis', 'rugby', 'swimming', 'darts', 'basketball'];

var removeSportsSplice = newsports.splice(2, 1);
console.log(removeSportsSplice); 
console.log(newsports);

// end 


// note Iterating over a array 

// for .. of - used in arrays

console.log('for..of')
for (let currentSport of newsports) {
    let uppercaseSport = currentSport.toUpperCase();
    console.log(uppercaseSport);
}

// long form or classic for loops

console.log('classic')
// i is set start position of 0; i is checked on each iteration to see if it is less that the length of the sports array, on each loop the value of i is increased by 1 (Note: This increment can be set to any number to iterate over every x element rather than every 1)
// sports[i] refers to the position in the array which is currently being checked.
for (let i = 0; i< sports.length; i++) {
    let currentSport = sports[i];
    let uppercaseSport = currentSport.toUpperCase();
    console.log(uppercaseSport);
}

//end


//note Objects

// Object with key value pairs
let movie = {
    title: 'It\'s a Wonderful Life',
    year: 1946,
    language: 'Spanish',
};

// show all of the movie details
console.log(movie);


// show just the movie title
let title = movie.title;
console.log(title);

// Adding a new key value pair - when js sees a element which it doesn't have it will add a new one
// Here an array is also being added to the object.
movie.cast = ['James Stewart', 'Donna Reed'];

console.log(movie);

// Changing the value in one of the key value pairs
movie.language = 'English';
console.log(movie);

// Adding a new element which has a special character inside - will print into console showing in '' to indicate this is how it needs to be called with [].
movie['subtitle-language'] = 'German';

console.log(movie);

let propertyToAccess = 'subtitle-language';
movie[propertyToAccess] = 'Italian';
console.log(movie[propertyToAccess]);


// Deleting a key value pair

delete movie.year;
console.log(movie);

// Adding Nested properties

movie.ratings = {
    critic: 94,
    audience: 95,
};

console.log(movie);

// To access audience rating - Accessing audience inside ratings inside movie
let audienceRating = movie.ratings.audience;
console.log(audienceRating);

// for ... in - used in objects
// fyi the rating will show object Object - this is to be expected as we are not looping through its internal array.
for (let key in movie){
    let value = movie[key];
    console.log(`The ${key} is ${value}`)
};

// Accessing the objects keys
// This will be logged as an array - which in turn can be used for other things.
let keys = Object.keys(movie);
console.log(keys);

//end
