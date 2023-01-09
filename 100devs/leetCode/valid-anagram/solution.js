/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {

    if (s.length !== t.length) return false;

    let sA = {}
    let sT = {}
    for (let key of s) {
        sA[key] ? sA[key]++ : sA[key] = 1
    }

    for (let key of t) {
        sT[key] ? sT[key]++ : sT[key] = 1
    }

    for (let key of s) {
        if (sA[key] !== sT[key]) return false;
    }

    return true;

};