// Longest Common Prefix using Sorting
// Problem Statement: Given a set of strings, find the longest common prefix.
// Examples:

// Input: {“geeksforgeeks”, “geeks”, “geek”, “geezer”}
// Output: “gee”

// Input: {“apple”, “ape”, “april”}
// Output: “ap”

// The longest common prefix for an array of strings is the common prefix between 2 most dissimilar strings. For example, in the given array {“apple”, “ape”, “zebra”}
// , there is no common prefix because the 2 most dissimilar strings of the array “ape” and “zebra” do not share any starting characters. 
// We have discussed five different approaches below posts. 




// function longestCommonPrefix(arr) {
//     // Assign the first element of arr to result
//     let result = arr[0];
//     let length = result.length;
 
//     // Iterate for the rest of the elements in the array
//     for (let i = 1; i < arr.length; i++) {
//         // Find the index of result in the current string
//         while (arr[i].indexOf(result) !== 0) {
//             // Update the matched substring prefix
//             result = result.substring(0, length - 1);
//             length--;
 
//             // Check for an empty case and return if true
//             if (result === '') {
//                 return '-1';
//             }
//         }
//     }
 
//     return result;
// }
 
// // Driver code to test the function
// const input = ["geeksforgeeks", "geeks", "geek", "geezer"];
// console.log("The longest Common Prefix is:", longestCommonPrefix(input));



// const result0 = longComPrefix(['geeksforgeeks', 'geeks', 'geek', 'geezer']);
// console.log(result0)


// Sort the elements of an array of strings called “strs” in lexicographic (alphabetical) order using the Arrays.sort(strs) method.
// Assign the first element of the sorted array (the lexicographically smallest string) to a string variable s1.
// Assign the last element of the sorted array (the lexicographically largest string) to a string variable s2.
// Initialize an integer variable idx to 0.
// Start a while loop that continues while idx is less than the length of s1 and s2.
// Within the while loop, check if the character at the current index in s1 is equal to the character at the same index in s2. If the characters are equal, 
// increment the value of idx by 1.
// If the characters are not equal, exit the while loop.
// Return the substring of s1 that starts from the first character and ends at the idxth character (exclusive).


function longComPrefix(arr) {
arr.sort();
 let s1 = arr[0]
 let s2 = arr[arr.length-1]
 idx=0; 

 while(idx < s1.length && idx < s2.length){
    if(s1[idx] !== s2[idx]){
        break;
    }
    idx++
 }

 return s1.subString(0,idx)
}
 
// Driver code to test the function
const input = ["geeksforgeeks", "geeks", "geek", "geezer"];



const result0 = longComPrefix(['geeksforgeeks', 'geeks', 'geek', 'geezer']);
console.log(result0)