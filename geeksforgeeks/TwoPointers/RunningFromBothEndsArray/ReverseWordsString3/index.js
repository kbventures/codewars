// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 
// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "Mr Ding"
// Output: "rM gniD"
 

// Constraints:

// 1 <= s.length <= 5 * 104
// s contains printable ASCII characters.
// s does not contain any leading or trailing spaces.
// There is at least one word in s.
// All the words in s are separated by a single space.

/**
 * @param {string} s
 * @return {string}
 */
// V1 Brute Force
// var reverseWords = function(s) {
//     let split = s.split(' ')
//     let result = split.map(e=>{
//         return e.split("").reverse().join("")
//     })

//     return result.join(" ")
// };

// const result0 = reverseWords("Let's take LeetCode contest")

// console.log(result0)


// v2 TWO POINTERS
// function reverseWords(s) {
//     // Convert the string to an array for easier manipulation
//     const chars = s.split('');
    
//     let start = 0;
//     let end = 0;
    
//     // Iterate through the characters of the string
//     while (end < chars.length) {
//         // Move the end pointer to the end of the current word
//         while (end < chars.length && chars[end] !== ' ') {
//             end++;
//         }
        
//         // Reverse the characters of the current word
//         reverse(chars, start, end - 1);
        
//         // Move the start and end pointers to the beginning of the next word
//         start = end + 1;
//         end = start;
//     }
    
//     // Convert the array back to a string
//     return chars.join('');
// }

// // Helper function to reverse characters in place within a range
// function reverse(chars, start, end) {
//     while (start < end) {
//         const temp = chars[start];
//         chars[start] = chars[end];
//         chars[end] = temp;
//         start++;
//         end--;
//     }
// }




// V4 Reverse Words Attemp at Two Pointers

var reverseWords = function(s) {
    let end = 0;
    let start = s.length -1;
    let chars = s.split("")

    while(end !== s.length -1){
        while(chars[end] !== " " && chars[end] !== undefined){
            end++
        }
        function reverseString(start,end,chars){
            while(start < end){
                let temp = chars[start];
                chars[start] = chars[end]
                chars[end] = temp; 
                chars++
                end--
            }

        }
        reverseString(start,end,chars)
        start = end + 1
        end = start;
    }
    return s; 
};


console.log(reverseWords("Let's take LeetCode contest")); // Output: "s'teL ekat edoCteeL tsetnoc"
// console.log(reverseWords("Mr Ding")); // Output: "rM gniD"



