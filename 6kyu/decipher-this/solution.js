/*
For each word:
the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
*/

// can be wrapped for making simple and readable
function isNumeric(num) {
    return !isNaN(num)
}

// Obtain String from num
function transformNumberToString(word) {
    let temp;
    if (isNumeric(word[2])) {
        temp = word.slice(0, 3)
        return String.fromCharCode(temp)
    } else {
        temp = word.slice(0, 2)
        return String.fromCharCode(temp)
    }
}
// Remainder of string without number
function remainderString(word) {
    if (isNumeric(word[2])) {
        if (word.length < 4) return ""
        return word.slice(3)
    } else {
        if (word.length < 3) return ""
        return word.slice(2)
    }
}

// Reverse first and second character of reminaing string
function reverseFirstAndSecond(str) {
    if (str.length == 1 || str.length == 0) return str
    let first = str[0]
    let last = str[str.length - 1]
    if (str.length > 2) return last + str.slice(1, -1) + first;
    return last + first;
}

function decipherThis(str) {
    //have fun!
    const result = str.split(' ').map(e => {
        let firstLetter = transformNumberToString(e)
        let remainder = remainderString(e)
        console.log(remainder)
        let reversed = reverseFirstAndSecond(remainder)
        return firstLetter + reversed
    }).join(' ')
    return result[0].toUpperCase() + result.slice(1)
    // Need to make the first word capitalised
};




console.log(decipherThis("72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o"))

// console.log(decipherThis("121eva 97"))
// console.log(decipherThis('17olle'))
// console.log(decipherThis('17oe'))
// console.log(decipherThis('17o'))
// console.log(decipherThis('17'))




function decipherThis(str) {
    str = str.split(' ');
    // Array of the numbers
    let numArr = str.map((x) => `${x.match(/\d{1,}/)[0]}`);
    console.log(numArr)
    return str
        .map((x, y) => x.replace(numArr[y], String.fromCharCode(numArr[y])))
        .map((x) =>
            x.length > 2
                ? [...x]
                    .map((a, b) =>
                        b === 1 ? x[x.length - 1] : b === x.length - 1 ? x[1] : a
                    )
                    .join('')
                : x
        )
        .join(' ');
}

console.log(decipherThis("72olle 103doo 100ya"))
