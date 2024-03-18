// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

 

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
 

// Constraints:

// 1 <= s.length <= 105
// s[i] is a printable ascii character.

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// V1
// var reverseString = function(s) {
//     let start = 0;
//     let end = s.length-1
//     for (let i =0; i<= Math.floor(end/2); i++){
//         let temp = s[i]
//         s[i]=s[end]
//         s[end]=temp;
//         end--
//         console.log(s)

//     }
//     console.log(s)
// };

// reverseString(["h","e","l","l","o"])


var reverseString = function(s) {
    let start = 0;
    let end = s.length-1
    for (let i =0; i< Math.floor((end + 1) /2); i++){
        let temp = s[i]
        s[i]=s[end -i]
        s[end-i]=temp;
    }
    console.log(s)
};

reverseString(["h","e","l","l","o"])
// reverseString(["A"," ","m","a","n",","," ","a"," ","p","l","a","n",","," ","a"," ","c","a","n","a","l",":"," ","P","a","n","a","m","a"])