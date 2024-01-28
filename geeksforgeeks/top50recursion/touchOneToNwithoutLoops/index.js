//https://www.geeksforgeeks.org/print-1-to-n-without-using-loops/

// Input: N = 5
// Output: 1 2 3 4 5
// Explanation: We have to print numbers from 1 to 5.

// Input: N = 10
// Output: 1 2 3 4 5 6 7 8 9 10
// Explanation: We have to print numbers from 1 to 10.


// PREP
// Parameter N for number
// Returns a print of 1 to N
// Example N = 5 returns 1 2 3 4 5


// 1) Function that receives n number
// 2) Recursively call itself until index is equal to n
// 3) Return print 1 to n

function print1toNwithoutLoops(n){
    if(n < 1) return 

    let result = n

    function recursiveFunction(i){
        if(i === 0) return 

        result = result + " " + i

        recursiveFunction(i-1)
    }
    recursiveFunction(result -1)
    console.log(result)
    return result; 
}

console.log(print1toNwithoutLoops(5))
// console.log(print1toNwithoutLoops(1))
// console.log(print1toNwithoutLoops(0))