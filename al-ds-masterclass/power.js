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

