function duplicateEncode(word) {
    return word.toLowerCase().split('').map((e, i, arr) => {
        // Check If Special Character
        if (e.toUppowerCase !== e.toLowerCase()) {
            if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
                return "("
            } else {
                return ")"
            }
        }
        // Special Character
        return e;
    }).join('')
}

function duplicateEncode(word) {
    return word
        .toLowerCase()
        .split('')
        .map(function (a, i, w) {
            return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
        })
        .join('');
}




