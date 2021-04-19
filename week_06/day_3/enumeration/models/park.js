const Park = function(name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
}

Park.prototype.add = function(dino){
    this.dinosaurs.push(dino);
}

Park.prototype.remove = function(dino){
    const index = this.dinosaurs.indexOf(dino);
    this.dinosaurs.splice(index, 1);
}

// this is a bubble sort
Park.prototype.findMostAttractiveDino = function() {
    const sortedDinos = this.dinosaurs.sort((dino1, dino2) => { 
    return dino2.guestsAttractedPerDay - dino1.guestsAttractedPerDay;
    })
    return sortedDinos[0];
}


Park.prototype.findBySpecies = function(species){
    const foundDinos = this.dinosaurs.filter((dino) => {
        // Return is needed as without it an empty array will be returned
        // The return doesn't stop the loop.
        return dino.species === species;
    });
    return foundDinos;
}
    

Park.prototype.calculateTotalNumberOfVisits = function(){
    let total = this.dinosaurs.reduce((runningTotal, dino) => {
        // Return is used as the function goes onto new line
        // Beaware - no need to do +=
        return runningTotal + dino.guestsAttractedPerDay;
    // Set the running total to be 0 at this point to prevent NaN error
    }, 0);

    return total;

}

Park.prototype.calculateTotalNumberOfVisitsPerYear = function(){
    return this.calculateTotalNumberOfVisits() * 365;
}

Park.prototype.calculateTotalRevenue = function(){
    return this.calculateTotalNumberOfVisitsPerYear() * this.ticketPrice;
}

Park.prototype.removeBySpecies = function(species){
this.dinosaurs = this.dinosaurs.filter((dino) => dino.species !== species);
}

Park.prototype.numberOfDinosByDiet = function(){
    const numberOfDinosByDiet = {};

    for (const dino of this.dinosaurs) {
        if (numberOfDinosByDiet[dino.diet]) {
            numberOfDinosByDiet[dino.diet] += 1;
        } else {
          numberOfDinosByDiet[dino.diet] = 1;  
        }
    }
    return numberOfDinosByDiet;
}

Park.prototype.getAllSpeciesNames = function () {
    const speciesList = this.dinosaurs.map(() => {
        return dino.species; 
    })
    return speciesList;
}

module.exports = Park;