// PREP
//
// Parameter for sequence with pattern nth term is the sum of numbers from 0 to n, inclusive. 
// Returns for 3, [0,1,3,6] or -3, [0,-1,-3,-6]

function sumOfN(n) {
    // Pseudo Code
    // Fork to check if n is positie is negative
    // Loop 0 to nth or 0 to -nth depending on above check
    // Push to resulting array sum of numbers o to n
    // result result
    // insert here your code
    let result = [];
    let counter = 0;
    if (n > 0) {
        for (let i = 0; i <= n; i++) {
            counter += i;
            result.push(counter)
        }
        return result;
    }

    for (let i = 0; n <= i; i--) {
        // console.log(i)
        counter = counter + i;
        result.push(counter)
    }
    return result;


};

    // Example: sumOfN(-6), [0, -1, -3, -6, -10, -15, -21]);