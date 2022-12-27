/* power
Write a function called power which accepts a base and an exponent. The function should return the power of the base to 
the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

PURE, Helper Function & Memoization Version*/



/* Pure function
A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed. 
It does not depend on any state or data change during a program’s execution. Rather, it only depends on its input arguments.

Also a pure function does not produce any observable side effects such as network requests or data mutation etc.*/


// PURE
// Pure Function without recursion

// function power(base, exp){
//   let result = 1;
//   for(let i =0; i<exp;i++){
//     result *= base
//   }
//   return result
// }


// Pure function with recursion
// function power(base,exp){
//   if(exp ===0) return 1 
//   return base * power(base, exp -1)
// }



// A helper function is a function that performs part of the computation of another function


// Helper Function & Memoization

function power(base, exponent) {
    const memo = {};

    function helper(b, e) {
        if (e === 0) {
            return 1;
        }
        if (memo[e]) {
            return memo[e];
        }
        const result = b * helper(b, e - 1);
        memo[e] = result;
        return result;
    }

    return helper(base, exponent);
}


// Recursive
function power(base, exponent) {
    const memo = {};

    function helper(b, e) {
        if (e === 0) {
            return 1;
        }
        if (memo[e]) {
            return memo[e];
        }
        const result = b * helper(b, e - 1);
        memo[e] = result;
        return result;
    }

    return helper(base, exponent);
}


// Helper Function and Memoization

function powerCreator() {
    let cache = {}

    return function (base, exponent) {
        let temp = (String(base) + String(exponent))
        if (cache[temp]) {
            console.log('Cache is working')
            return cache[temp]
        }
        let power = Math.pow(base, exponent)
        cache[temp] = Math.pow(base, exponent)
        return power
    }
}

let a = powerCreator()
