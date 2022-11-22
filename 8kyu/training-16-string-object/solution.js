function cutIt(arr) {
    var smallest = arr[0].length;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length < smallest) {
            smallest = arr[i].length;
        }
    }
    arr.map(function (x) {
        return x.slice(0, smallest);
    });
    return map;
};