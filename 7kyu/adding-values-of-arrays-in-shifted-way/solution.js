function addingShifted(arrayOfArrays, shift) {
    var result = [];
    var endArrayLength = arrayOfArrays[0].length + shift * (arrayOfArrays.length - 1);
    for (var i = 0; i < endArrayLength; i++) {
        result.push(0);
    }
    for (var i = 0; i < arrayOfArrays.length; i++) {
        for (var j = 0; j < arrayOfArrays[i].length; j++) {
            result[j + shift * i] += arrayOfArrays[i][j];
        }
    }
    return result;
}


// Alternative Solution: Brute Force
function addingShifted(arrayOfArrays, shiftAmount) {
    let currentShift = 0;
    let result = [];
    // iterate through array of arrays
    for (let i = 0; i < arrayOfArrays.length; i++) {
        let array = arrayOfArrays[i];
        // iterate through array values
        for (let j = 0; j < array.length; j++) {
            let arrayValue = array[j]
            // if we dont have something at shifted index in result array, push it
            if (result[j + currentShift] === undefined) {
                result.push(arrayValue)
            } else {
                // otherwise add array value
                result[j + currentShift] += arrayValue
            }
        }
        // update shift for next array
        currentShift += shiftAmount
    }
    return result;
}