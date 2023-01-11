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