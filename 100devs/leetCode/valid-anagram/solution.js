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


// Leetcode solution


/* Pseudocode

Firstly, store chars inside object, and the frequencies of chars.
Secondly, looping the second string and decrement freq of char from obj.
Thirdly, checking inside obj, we return false in three conditions if any unique char, freq is negative and greater than 0. Otherwise, return true.

Complexity
Time complexity:
O(n + m)

Space complexity:
O(n)

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    const count = {};
    for (let char of s) {
        if (!(count[char])) {
            count[char] = 0;
        }
        count[char]++;
    }

    for (let char of t) {
        if (count[char] === undefined) {
            return false;
        } else {
            count[char]--;
        }
    }

    for (let char in count) {
        if (count[char] !== 0) {
            return false;
        }
    }

    return true;
};