function shuffleIt(arr, ...swaps) {
    for (swap of swaps) {
        var [a, b] = swap;
        [arr[a], arr[b]] = [arr[b], arr[a]];
    }
    return arr;
}