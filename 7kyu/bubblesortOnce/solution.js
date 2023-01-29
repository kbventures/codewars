function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function bubblesortOnce(array) {
    let n = array.slice()
    for (let i = 0; i < array.length - 1; i++) {
        if (n[i] > n[i + 1]) {
            swap(n, i, i + 1)
        }
    }
    return n
}