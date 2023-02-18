/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let temp = s.trim().split(' ')
    return temp[temp.length - 1].length
};