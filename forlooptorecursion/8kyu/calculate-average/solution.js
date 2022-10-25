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