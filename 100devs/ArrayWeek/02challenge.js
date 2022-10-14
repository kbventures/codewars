//I need twin functions, a function that swaps a given primitive value in a given 1-dimensional array to an index to the left,
// and another that swaps it to the right.

// If the given value is on the edge of the array and can't move in that direction, don't move it.
// The given primitive value will only occur once in the array
// The array passed in should be mutated by this function. Scandalous, I know.



let myArray = ['abc', 'xyz', 1, 2, 'Hey!']


function swapLeft(arr, key) {
    const index = arr.indexOf(key);
    const leftVal = arr[index - 1];

    if (index === 0) return arr;
    arr = arr.map((memo, elem, i) =>
        elem === index - 1 ? arr[index] : elem === index ? leftVal : memo
    );
    return arr;
}

function swapRight(arr, key) {
    const index = arr.indexOf(key);
    const leftVal = arr[index + 1];

    if (index === arr.length - 1) return arr;
    arr = arr.map((memo, elem, z) =>
        elem === index + 1 ? arr[index] : elem === index ? leftVal : memo
    );
    return arr;
}

myArray = ['abc', 'xyz', 1, 2, 'Hey!']

// call move left function with 'xyz' and myArray as arguments
console.log(swapLeft(myArray, 'xyz'))   // ['xyz', 'abc', 1, 2, 'Hey!']

// call move left function again, same arguments
// Note that 'xyz' is already as far left as it can go
console.log(swapLeft(myArray, 'xyz')) // ['xyz', 'abc', 1, 2, 'Hey!'] no change

// call move right function this time, with 2 and myArray as arguments
console.log(swapRight(myArray, 2)) // ['xyz', 'abc', 1, 'Hey!', 2]

// call move right function again, same arguments
// Note that 2 is already as far right as it can go
console.log(swapRight(myArray, 2)) // ['xyz', 'abc', 1, 'Hey!', 2] no change