/* power
Write a function called power which accepts a base and an exponent. The function should return the power of the base to 
the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

PURE, Helper Function & Memoization Version*/



/* Pure function
A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed. 
It does not depend on any state or data change during a program’s execution. Rather, it only depends on its input arguments.

Also a pure function does not produce any observable side effects such as network requests or data mutation etc.*/







// Recursive version & Pure
function power(base, exp) {
    if (exp === 0) return 1;
    return base * power(base, exp - 1)
}

// console.log(power(2,2))
// console.log(power(2,4))

// Helper function & Pure
function powerFunction(base, exp) {
    function power(base, exp) {
        if (exp === 0) return 1
        return base * power(base, exp - 1)
    }

    let result = power(base, exp)

    return result
}

// console.log(powerFunction(2,2))
// console.log(powerFunction(2,4))

// Factory Version & Pure
// Example specific exponent factory where hte user supplies the base
function exponentPower2Factory() {
    return (base) => {
        let exp = 2;
        function power(base, exp) {
            if (exp === 0) return 1
            return base * power(base, exp - 1)
        }
        let result = power(base, exp)
        return result
    }
}
let test = exponentPower2Factory()
// console.log(test(2))
// console.log(test(3))

// Factory Memoized Version & Pure

function memoizePowerFactory() {
    let cache = {}
    return (base, exp) => {
        let temp = String(base) + String(exp)
        if (cache[temp]) {
            console.log('Cache is working!')
            return cache[temp]
        }

        function internalPower(b, e) {
            if (e == 0) return 1
            return base * internalPower(b, e - 1)
        }
        let result = internalPower(base, exp)
        cache[temp] = result;
        return result
    }
}

let test0 = memoizePowerFactory()
console.log(test0(2, 2))
console.log(test0(2, 2))
console.log(test0(2, 3))



// // Pure Version
// var fib = function (n) {
//     let result = [0, 1]

//     if (n === 0 || n === 1) return n
//     for (let i = 2; i <= n; i++) {
//         let temp = result[i - 2] + result[i - 1]
//         result.push(temp)
//     }
//     return result[result.length - 1]
// };

// console.log(fib(4))

// // Recursive
// function fib(n) {
//     if (n < 2) return n

//     return fib(n - 1) + fib(n - 2)
// };

// console.log(fib(2))

// // Factory, helper & memoize version
// function fibCreate() {
//     let cache = {}

//     return (n) => {
//         if (cache[n]) {
//             console.log('cache is working')
//             return cache[n]
//         }
//         function fib(n) {
//             if (n < 2) return n
//             return fib(n - 1) + fib(n - 2)
//         }

//         let result = fib(n)
//         cache[n] = result
//         return result;
//     };
// }


// let test = fibCreate()
// console.log(test(5))
// console.log(test(5))


// Dynamic Programing
function fibCreate() {
    let memo = {}
    return (n) => {
        function fib(n) {
            if (memo[n]) {
                console.log('memo is working', memo[n])
                return memo[n];
            }
            if (n <= 0) return 0;
            if (n === 1) return 1;

            memo[n] = fib(n - 1) + fib(n - 2);
            return memo[n];
        }
        return fib(n)
    };
}

let test = fibCreate();
console.log(test(10))
console.log(test(20))




