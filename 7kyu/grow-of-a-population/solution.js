// PREP
//
// Parameter p0 is the population, percent is is a perctage value, aug is new inhabitant per year and p
// is population target. In order word how many years does it take to get to p. 
//
// Returns the ammount of years it takes to to get to p value.
//
// Example: (1500,5,100,5000) returns 15
//
// Pseudocode
// sum the current population with the sum of the currenty population multiplied by the percentage value and 
// and sum of new inhabitants.
// Take the result of this calculation and check to see if its reached target population p
// If not update p0 value and make the same calulation again and check until p target is reached
// return the amount of years it took to reach target

function nbYear(p0, percent, aug, p) {
    let years = 0;
    for (years; p0 < p; years++) {
        p0 += Math.floor(p0 * (percent / 100)) + aug;
    }
    return years;
}