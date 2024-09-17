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
// Constrains numbers are between 1 and 10K
var addStrings = function(num1, num2) {

  let result="";
  let carry = "";   
  for(let i=0;i<num1.length;i++){
    // console.log(num1[i],num2[i])
    
    
    tempResult = Number(num1[i]) + Number(num2[i])
    if(tempResult < 10){
      result += tempResult; 
    } else {
      // Remainder is the number that remains in position
      let remainder = String(tempResult % 10)
      carry = String(tempResult / 10)
      console.log("remainder carry", remainder, carry )
     
      result += remainder
      console.log(result)
    }
  }
  console.log("result & carry", result, carry)
  return carry + result; 
};

// const bruteForceResult = addStrings("1","1")
const bruteForceResult = addStrings("9","1")
// const bruteForceResult3 = addStrings("11","1")
// const bruteForceResult2 = addStrings("1","11")
// const bruteForceResult4 = addStrings("1","123")
// const bruteForceResult5= addStrings("123","1")

console.log(bruteForceResult)