// Program to print first n Fibonacci Numbers | Set 1
// Given an integer N. The task is to find the first N Fibonacci numbers.

// fibonacci-sequence

// Examples : 

// Input: n = 3
// Output: 0 1 1

//  0 1 1 2 3

// Input: n = 7
// Output: 0 1 1 2 3 5 8


function FibonacciRec(num, result = [0, 1]){
if( num == 0){
    return 0
} else if (num ==1){
    return 1
} else {
    return FibonacciRec()
}

}

const result = FibonacciRec(5)

console.log(result);