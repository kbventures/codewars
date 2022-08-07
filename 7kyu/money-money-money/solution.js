// PREP
//
// Parameters: Principal is the starting amount, Interest Is paid Annually, Taxes is the annual tax rate and
// desired is the sum of money wanted
// Returns the amount of years needed to attain the "desired" sum
// Example: 1000 invested at 0.05%, taxed at 0.18% with a desired return of 1100 will take 3 years
// Pseudocode

function calculateYears(principal, interest, tax, desired) {
    let years = 0;

    while (principal < desired) {
        let gains = principal * interest - (principal * interest * tax);
        principal += gains;
        years++
    }

    return years

}