// Prep:
// Paramter interger is an interger > 1
// Returns an array that will return all it's didivors except 1 and the number itself from smallest to largest.
// If the number is prime return itself "is prime"

function divisors(integer) {
    let result = [];
    for (let i = 2; i < integer; i++) {
        if (integer % i == 0) {
            result.push(i)
        }
    }
    return result.length !== 0 ? result : `${integer} is prime`
};