//PREP
//
// Parameter: I can assume the function will only receive positive whole numbers starting from 0.assume.assume
//
// Return: Nearest square number from the provided number whether it's before or after. 
// 
// Example 1: If we pass the number 3 to the function it will return 1. 
// Example 2: If we pass 10 to the fucntion it will return 9
// Example 3:  If we pass 16 the function will return return 16
// Example: 4 If we pass 17 the function will return 16; 

// Pseucode:
// If the number passed is a perfect square then return the same value
// We need setup 2 loops. On that checks for the nearest perfect ot its left and how far is it.
// We would repeat this process with another loop but going to its right.  
// We would calculate which is the nearest. And return that perfect square. 

// while (Math.sqrt(n) % 1 !== 0) {
//     n-- || n++
// }
// return n;

// function nearestSq(n){
//     // your code
//     while(Math.sqrt(n)%1!==0){
//         n-- || n++
//     }
//     return n;
// }

function nearestSq(n) {
    let higherNum = n + 1
    while (Math.sqrt(higherNum) % 1 !== 0) {
        console.log(higherNum)
        console.log((2 % 1))
        console.log((9 % 1))
        console.log((16 % 1))
        console.log('***')
        higherNum++
    }
    let lowerNum = n - 1
    while (Math.sqrt(lowerNum) % 1 !== 0) {
        lowerNum--
    }
    if (n === 1) {
        return n
    } else if (higherNum - n < n - lowerNum) {
        return higherNum
    } else {
        return lowerNum
    }
}


console.log(nearestSq(1))


