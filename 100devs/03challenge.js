

function replaceKeyWithSpaces(str) {
    let result = str;
    ['X', 'X', 'X', 'X', 'X'].forEach(e => {
        result = result.replace(e, "")
    })
}
