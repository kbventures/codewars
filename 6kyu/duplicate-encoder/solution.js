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