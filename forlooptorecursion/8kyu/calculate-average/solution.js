// Wrapper Function
function findAverage(array) {
    if (typeof array !== 'undefined' && array.length === 0) {
        return 0;
    }
    let arrayLength = array.length
    function calc(arrayLength) {
        if (arrayLength === 0) {
            return array[0]
        }
        return calc(arrayLength - 1) + array[arrayLength]
    }
    return calc(arrayLength - 1) / array.length;
}

// Without Wrapper Function
let array = [1, 2, 3]

function calc(array, arrayLength = array.length - 1) {
    if (typeof array !== 'undefined' && array.length === 0) {
        return 0;
    }
    if (arrayLength === 0) {
        return array[0]
    }
    return calc(array, arrayLength - 1) + array[arrayLength]
}

console.log(calc(array) / array.length)