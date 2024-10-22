// https://leetcode.com/problems/guess-number-higher-or-lower/description/

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {

    let left = 1;
    let right = n;
    let middle;
    while(left <= right){
        middle = Math.floor((left + right) / 2)
        let tempGuess = guess(middle)
        if(tempGuess==0){
            return middle
        } else if (tempGuess ==1){
            left = middle+1
        } else {
            right = middle -1
        }
    }
        
    };