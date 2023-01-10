
// Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

// Pure, With Helper Function and Memoization Version: 



// pure factorial


// function factorial(x) {
//   if (x === 0) return 1
//   return factorial(x - 1) * x
// }

// function factorialHelper(y) {
//   function factorial(x) {
//     if (x === 0) return 1
//     return factorial(x - 1) * x
//   }
//   return factorial(y); 
// }

// Memo with Helper Function
let cache = {}
function memoFactorial(x) {
    if (cache[x]) {
        console.log('cache is working')
        return cache[x]
    }
    function factorial(y) {
        if (y === 0) return 1
        return factorial(y - 1) * y
    }

    let result = factorial(x)
    cache[x] = result;
    return result;
}

console.log(memoFactorial(4))
console.log(memoFactorial(4))

let cache = {}
function memoFactorial(x) {
    if (cache[x]) {
        console.log('cache is working')
        return cache[x]
    }
    function factorial(y) {
        if (y === 0) return 1
        return factorial(y - 1) * y
    }

    let result = factorial(x)
    cache[x] = result;
    return result;
}

console.log(memoFactorial(4))
console.log(memoFactorial(4))

// Factorial, pure, helper function, memo and reusable