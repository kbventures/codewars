function swap(arr, idx1, idx2) {
    console.log(idx1, idx2)
    return [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

var reverseString = function (s) {

    for (let i = 0; i < s.length / 2; i++) {
        // console.log(i,s.length-1-i)
        swap(s, i, s.length - 1 - i)
        console.log(s)
    }

    return s;
};