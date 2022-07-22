// PREP
//
// Parameter is a string of words containeing letters and a single number ranging from 1 to 9 or an empty string
// Returns the string of words containing a single number in ascending order of the number they contain
// Example: "t1 t3 t2" returns "t1 t2 t3"
// Pseucode
// Split words into an array
// Sort this array by the number in each word using match and then rejoin this array and return it


//The best Practices
function order(words) {
    return words.split(' ').sort(function (a, b) {
        return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
}

//Others
function order(words) {
    if (words.length == 0) { return words }
    let wordsarr = words.split(' ');
    let indarr = words.match(/\d/g);
    let neword = [];
    for (let i = 1; i <= indarr.length; i++) {
        let ind = indarr.indexOf(i.toString())
        neword.push(wordsarr[ind])
    }
    return neword.join(' ')
}