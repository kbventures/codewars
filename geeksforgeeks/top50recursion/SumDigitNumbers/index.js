// Given a number, we need to find sum of its digits using recursion.
// Examples: 
 

// Input : 12345
// Output : 15

// Input : 45632
// Output :20


function sumDigitNumbers(num, index = String(num).length - 1, result = 0){
    
    num = num.toString();
    if(index== -1)return result;

    return sumDigitNumbers(num, index - 1, result + Number(num[index]))
}

const result = sumDigitNumbers(55551);

console.log(result)