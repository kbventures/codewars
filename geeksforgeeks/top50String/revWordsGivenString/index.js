// Reverse words in a given string
// Last Updated : 13 Sep, 2023
// Given a string, the task is to reverse the order of the words in the given string. 

// Examples:

// Input: s = “geeks quiz practice code” 
// Output: s = “code practice quiz geeks”

// Input: s = “i love programming very much” 
// Output: s = “much very programming love i” 


// V1 Brute Force
// const revWordGivenStr = function (str){
// let strSplit = str.split(" ")
// return strSplit.map(e => e.split("").reverse().join("")).join(" ")
// }


// const result0 = revWordGivenStr('geeks quiz practice code')

// console.log(result0)
