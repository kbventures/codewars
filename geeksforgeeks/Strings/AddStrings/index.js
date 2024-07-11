// https://leetcode.com/problems/add-strings/description/

// 415. Add Strings
// Easy
// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

 

// Example 1:

// Input: num1 = "11", num2 = "123"
// Output: "134"g
// Example 2:

// Input: num1 = "456", num2 = "77"
// Output: "533"
// Example 3:

// Input: num1 = "0", num2 = "0"
// Output: "0"
 

// Constraints:

// 1 <= num1.length, num2.length <= 104
// num1 and num2 consist of only digits.
// num1 and num2 don't have any leading zeros except for the zero itself.


// V1 Brute Force
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// const addStrings = (num1, num2) => {
//     return (BigInt(num1) + BigInt(num2)).toString();
//   };

  // V2
//   var addStrings = function(num1, num2) {
//     const StringValue = {"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"0":0};
//     let i = num1.length - 1;
//     let j = num2.length - 1;
//     let carry = 0;
//     let result = '';

//     while (i >= 0 || j >= 0) {
//         let digit1 = i >= 0 ? StringValue[num1[i]] : 0;
//         let digit2 = j >= 0 ? StringValue[num2[j]] : 0;
//         let sum = digit1 + digit2 + carry;
//         console.log("sum",sum)
//         carry = Math.floor(sum / 10);
//         console.log("carry", carry)
//         result = (sum % 10) + result;
//         console.log('result',result)
//         i--;
//         j--;
//     }

//     if (carry > 0) {
//         result = carry + result;
//     }

//     return result;
// };

// const result0 = addStrings("87","107")
// console.log("Final Result: ", result0)



// V3 Personal Attemp

// PREP
// Parameters is num1 and num2 are strings with number characters not starting with 0 but could be 0
// Returns the sum of num1 and num2 converted as numbers to a string result
// num1 = 9 num2 = 12 returns string "21" 


var addStrings = function(num1, num2) {
  // Pseudo code 
  // Object identifying number value of string numbers
  let stringNumbers = {"0":0,"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9}
  // While look that keep iterating until end either number
  let i=num1.length-1;
  let j=num2.length-1;
  let result="";
  let carry =0; 
  while(i>=0 || j>=0){
  // Add the sum of string numbers, update carry and string result
  let tempI = i >= 0 ? stringNumbers[num1[i]] : 0;
  let tempJ = i >= 0  ? stringNumbers[num2[j]] : 0;
  
  // Temp result:
  let tempNumResult = tempI + tempJ + carry; 

  // Carry
  carry = Math.floor(tempNumResult / 10);
  // Update Result
  result = tempNumResult % 10 + result; 
  console.log("update resul",result)
  i--
  j--
  }
  // Return Result String;
  return result;
};

const result0 = addStrings("87","107")
console.log("Final Result: ", result0)


// 14
//  Sum 4, Carry 1
//  Sum 8 + Carry 1 = 9 Carry: 0; 
//  194


// V4 Recursive version