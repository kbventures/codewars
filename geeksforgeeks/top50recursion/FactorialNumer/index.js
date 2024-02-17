// What is the factorial of a number?
// Factorial of a non-negative integer is the multiplication of all positive integers smaller than or equal to n.
// For example factorial of 6 is 6*5*4*3*2*1 which is 720. 
// A factorial is represented by a number and a  ” ! ”  mark at the end. It is widely used in permutations and combinations to calculate the total possible outcomes. 
//A French mathematician Christian Kramp firstly used the exclamation.



function FactorialNum(num, result = 1){
if(num == 1) return result; 
return FactorialNum(num -1 , result = result * num)
}


const result = FactorialNum(6)

console.log(result);