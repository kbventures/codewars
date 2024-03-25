
// 2000. Reverse Prefix of Word
// Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

// For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
// Return the resulting string.

 

// Example 1:

// Input: word = "abcdefd", ch = "d"
// Output: "dcbaefd"
// Explanation: The first occurrence of "d" is at index 3. 
// Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".
// Example 2:

// Input: word = "xyxzxe", ch = "z"
// Output: "zxyxxe"
// Explanation: The first and only occurrence of "z" is at index 3.
// Reverse the part of word from 0 to 3 (inclusive), the resulting string is "zxyxxe".
// Example 3:

// Input: word = "abcd", ch = "z"
// Output: "abcd"
// Explanation: "z" does not exist in word.
// You should not do any reverse operation, the resulting string is "abcd".
 

// Constraints:

// 1 <= word.length <= 250
// word consists of lowercase English letters.
// ch is a lowercase English letter.


/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {

let indexOfCh = word.indexOf(ch) ; 
let wordTemp = word.split('')
let middle = Math.floor((indexOfCh + 1) / 2); // Correctly calculate the middle index

console.log(middle)
for(let i = 0; i< middle ;i++){
    console.log(wordTemp[i], wordTemp[indexOfCh-i])
    let temp = wordTemp[i]
    wordTemp[i] = wordTemp[indexOfCh-i]
    wordTemp[indexOfCh-i]= temp; 
    // console.log(wordTemp)
}
// console.log(wordTemp)
return wordTemp.join('')
};


const result0 = reversePrefix("abcdefd", "d");

console.log(result0)

// V3
var reversePrefix = function(word, ch) {
    let indexOfCh = word.indexOf(ch);
    if (indexOfCh === -1) return word; // If ch is not found, return the original word

    let left = 0;
    let right = indexOfCh;
    
    while (left < right) {
        let temp = word[left];
        word[left] = word[right];
        word[right] = temp;
        
        left++;
        right--;
    }

    return word;
};

const result0 = reversePrefix("arzquwnjyn", "j");
console.log(result0); // Output: "jnwuqzarny"