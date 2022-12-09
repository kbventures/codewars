
function deleteValues(array, pred) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (pred(array[i])) {
            array.splice(i, 1);
        }
    }
    return array;
}

