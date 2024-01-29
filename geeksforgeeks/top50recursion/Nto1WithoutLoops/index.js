// https://www.geeksforgeeks.org/print-n-to-1-without-loop/

// Input: N = 5
// Output: 1 2 3 4 5
// Explanation: We have to print numbers from 5 to 1 .

// Input: N = 10
// Output: 10 9 8 7 6 5 4 3 2 1
// Explanation: We have to print numbers from 10 to 1


// PREP
// Parameter N for number
// Returns a print of 1 to N
// Example N = 5 returns 1 2 3 4 5


// 1) Function that receives n number
// 2) Recursively call itself until index is equal to n
// 3) Return print n to 1

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

console.log(print1toNwithoutLoops(10))
// console.log(print1toNwithoutLoops(1))
// console.log(print1toNwithoutLoops(0))