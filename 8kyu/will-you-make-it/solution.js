// PREP
//
// Parameters: distance from pump, miles per galon, fuelleft
//
// Returns boolean stating if its possible or not to return to destination

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    // Pseusdo Code
    // Multiply miles per gallon by galons of fuel left
    // if >= distanceToPump return true, else false
    return mpg * fuelLeft >= distanceToPump ? true : false;
};

  // Examples: zeroFuel(100,50,1) returns false