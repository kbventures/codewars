function arraySum(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            newArr = newArr.concat(arraySum(arr[i]));
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr.filter(e => { return typeof e == 'number' }).reduce((acc, e, i) => {
        if (typeof e == String) return acc;
        return acc + e
    }, 0)
}