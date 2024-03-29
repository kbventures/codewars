/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    console.log(s)
    let temp = s.split('').filter(e => e.toUpperCase().charCodeAt() > 64 && e.toUpperCase().charCodeAt() < 91 || e.charCodeAt() > 47 && e.charCodeAt() < 58).join('').toLowerCase()
    console.log(temp)
    return temp === temp.split("").reverse().join("")
};

// Alternate Solution
var isPalindrome = function (s) {
    s = s.replace(/[^a-zA-Z0-9]/g, '')
    s = s.toLowerCase()

    return s == s.split('').reverse().join('')
};



// Two Pointers

https://leetcode.com/problems/valid-palindrome/

var isPalindrome = function (s) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz0123456789"
    let start = 0;
    let end = s.length - 1

    while (start < end) {
        let tempStart = s[start].toLowerCase()
        let tempEnd = s[end].toLowerCase()
        if (alphabet.includes(tempStart) && alphabet.includes(tempEnd)) {
            if (tempStart !== tempEnd) return false;
            start++
            end--
            continue
        }
        if (!alphabet.includes(tempStart)) {
            start++
        }
        if (!alphabet.includes(tempEnd)) {
            end--
        }
    }
    return true
}