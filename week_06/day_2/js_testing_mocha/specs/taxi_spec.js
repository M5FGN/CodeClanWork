// import test file
const assert = require('assert');

// import the file to be tested
const Taxi = require('../taxi.js');

// decsribe() ... gift from mocha
// two arguements (1) name of the model, (2) function
describe('Taxi', function(){
    // Declared ouside of the function so that it is seen throughout function.
    let taxi;
    beforeEach(function(){
        // unable to use let or const with taxi as this will restrict it inside of the beforeEach function
        taxi = new Taxi('Toyota', 'Prius')
    });


    it('should have a manufacturer', function(){
        // Can be removed if declared in beforeEach
        // const taxi = new Taxi('Toyota', 'Prius'); //Arrange
        const actual = taxi.manufacturer; //Act
        assert.strictEqual(actual, 'Toyota');//Assert
    });
    it('should have a model', function(){
        // const taxi = new Taxi('Toyota', 'Prius');
        const actual = taxi.model;
        assert.strictEqual(actual, 'Prius');
    });

    xdescribe('passengers', function(){
        it('should start empty');
        //demonstration on nested describe functions but the x before describe stops it from running. 
    });
});