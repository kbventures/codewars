// // https://leetcode.com/problems/add-strings/description/

// // 415. Add Strings
// // Easy
// // Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

// // You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

 

// // Example 1:

// // Input: num1 = "11", num2 = "123"
// // Output: "134"g
// // Example 2:

// // Input: num1 = "456", num2 = "77"
// // Output: "533"
// // Example 3:

// // Input: num1 = "0", num2 = "0"
// // Output: "0"
 

// // Constraints:

// // 1 <= num1.length, num2.length <= 104
// // num1 and num2 consist of only digits.
// // num1 and num2 don't have any leading zeros except for the zero itself.


// // V1 Brute Force


// /**
//  * @param {string} num1
//  * @param {string} num2
//  * @return {string}
//  */
// // Constrains numbers are between 1 and 10K

// function appendZeros(bigLengthNum, smallLengthNum){
//   let bigLength = bigLengthNum.length;
//   let smallLength = smallLengthNum.length; 
//   let diff = bigLength - smallLength

//   // for(let i =0; i< diff;i++){
//   //   smallLengthNum = "0" + smallLengthNum;
//   // }
//   smallLength = "0".repeat(diff) + smallLength;

//   return [ bigLengthNum, smallLengthNum ] 
// }


// var addStrings = function(num1, num2) {

//   // Num1 & Num2 not same lenght will require appending 0's to the shortest number
//   if(num1.length > num2.length){
//     // Append 0's' to num2
//     [num1,num2] = appendZeros(num1,num2)
//   } else if(num1.length < num2.length){
//     // Append 0's to num1 and reverse return order
//     [num1, num2] = appendZeros(num2, num1)
//   }

//   let result="";
//   let carryOver = "";   

//   for(let i= num1.length-1;i>=0;i--){
    
//     let numberOne = Number(num1[i])
//     let numberTwo = Number(num2[i]) 
//     let tempResult,remainder; 

//     if(carryOver.length == 0){
//     tempResult = numberOne + numberTwo;
//     console.log("tempResult when length of carryOver 0", tempResult)
//     // console.log(tempResult)
//   } else {
//       tempResult = numberOne + numberTwo + Number(carryOver)
//       console.log("tempResult when carry over greater than 0: ",tempResult)
//     }

//     if(tempResult < 10){
//       carryOver =""
//       result = tempResult +result; 
//       console.log("result when tempresult < 10", result, typeof result)
//     } else {
//       // Remainder is the number that remains in position
//       remainder = String(tempResult % 10)
//       // Moves to the calculation of the next digit
//       carryOver = String(Math.floor(tempResult / 10))
//       result = remainder + result;
//       console.log("stats when computation 10 or greater remainder, carryOver result", remainder, typeof remainder,  carryOver, typeof carryOver, result, typeof result)
//     }
//     // console.log("before looping: result remainder carryOver", result, remainder, carryOver)
//   }
//   return carryOver + result; 
// };

// // const bruteForceResult = addStrings("1","1")
// // const bruteForceResult = addStrings("9","1")
// // const bruteForceResult = addStrings("1","3221")
// const bruteForceResult = addStrings("322","299")
// // 1110
// // const bruteForceResult4 = addStrings("1","123")
// // const bruteForceResult5= addStrings("123","1")

// console.log(bruteForceResult)


// // Todo 
// // Apptend 0's to smaller if there is one so calculation is the same for both
// // Make sure carry suvives digit calcuations until completed
// // Space and time complexity analysis
// // Refactor
// // Veralize


// // Optimal Two pointer Version
// var addStrings = function(num1, num2) {
//   let res = "", dot = 0, sum;
//   let i = num1.length - 1, j = num2.length - 1;
//   while(j >= 0 || i >= 0){
//       sum = (num1[i--] | 0) + (num2[j--] | 0) + dot;  // "9" | 0  ->  9,  undefined | 0  ->  0;
//       res = sum % 10 + res;
//       dot = sum > 9 ? 1: 0;
//   }
//   return (dot ? 1 : "") + res;
// };
































// Two Pointer Version

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

var addStrings = function(num1, num2) {
  let res ="";
  let carryOver = 0;
  let j = num1.length-1;
  let k = num2.length-1;

  while(j>=0 || k>=0){
    // console.log(num1[j],num2[k])

    let currentCalc = ((num1[j--] | 0) + (num2[k--] | 0) + carryOver);
    // console.log(currentCalc)
    res = (currentCalc % 10) + res;
    // 1 or 0; 
    carryOver = currentCalc > 9 ? 1 : 0;   
  }


return (carryOver || "") + res; 
  };

const optimalResult = addStrings("1","9")
// const optimalResult = addStrings("1","1")
// const optimalResult = addStrings("1","3221")
// const optimalResult = addStrings("322","299")
// 1110
// const bruteForceResult4 = addStrings("1","123")
// const bruteForceResult5= addStrings("123","1")

console.log(optimalResult)



// 1 % 10 = 1
// 2 % 10 = 2
// 3 % 10 = 3

// 10 % 10 = 0
// 11 % 10 = 1