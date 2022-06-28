// PREP
//
//Parameter number is an interger greater than 0
//
//Returns the sum of all numberse multiples of of 3 and 5 BELOW the number integer passed
// Pseudo code:
// Create a result variable to hold the sum of all the multiples
// Look using the number as counter. Number 10 would loop from 1 to 9
// If the current number looped is a multiple of 3 or 5 add it to the result variable
// Once loop is finished return variable
function solution(number) {
    let result = 0;
    //     console.log(result)
    if (number < 0) return 0;
    for (let i = 1; i < number; i++) {
        console.log(i)
        if (i % 3 === 0 || i % 5 === 0) result = result + i;
    }
    return result;
}

// Example number(10) returns 23
// Example number(20) returns 78
// example: number(33) returns 23
console.log(solution(33));