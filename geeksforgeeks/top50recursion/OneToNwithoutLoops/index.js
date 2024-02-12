// https://www.geeksforgeeks.org/print-1-to-n-without-using-loops/

// Input: N = 5
// Output: 1 2 3 4 5
// Explanation: We have to print numbers from 1 to 5 .

// Input: N = 10
// Output: 1 2 3 4 5 6 7 8 9 10
// Explanation: We have to print numbers from 1 to 10


// PREP
// Parameter N for number
// Returns a print of 1 to N
// Example N = 5 returns 1 2 3 4 5


// 1) Function that receives n number
// 2) Recursively call itself until index is equal to n
// 3) Return print n to 1

// function print1toNwithoutLoops(n){
//    let result = n;


//    function recursive1toN(num){
//       if(num == 0) return 
//       result = num + " " + result;
//       recursive1toN(num- 1) 
//    }
//    recursive1toN(n - 1)

//    return result; 

// }

// console.log(print1toNwithoutLoops(10))
// console.log(print1toNwithoutLoops(1))
// console.log(print1toNwithoutLoops(0))


function OneToNoLoops(num, index = 1, result = "") {
   if (num === index) {
       return result + index;
   }
   return OneToNoLoops(num, index + 1, result + index + " ");
}

console.log(OneToNoLoops(3));