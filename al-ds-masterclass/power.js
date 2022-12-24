/* power
Write a function called power which accepts a base and an exponent. The function should return the power of the base to 
the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

PURE, Helper Function & Memoization Version*/

// PURE
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    return base * power(base, exponent - 1);
}


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
