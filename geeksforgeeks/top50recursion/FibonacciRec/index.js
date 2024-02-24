// Program to print first n Fibonacci Numbers | Set 1
// Given an integer N. The task is to find the first N Fibonacci numbers.

// fibonacci-sequence

// Examples : 

// Input: n = 3
// Output: 0 1 1

//  0 1 1 2 3

// Input: n = 7
// Output: 0 1 1 2 3 5 8


// Fibonacci sequence using a single recursive function
function fibonacciSequence(n, current = 0, next = 1, result = []) {
  if (n === 0) {
      return result;
  }

  result.push(current);
  return fibonacciSequence(n - 1, next, current + next, result);
}

const result = fibonacciSequence(5);
console.log(result);

              
// 5, [0]

// // First Call
// 4, [0, 1]

// 3, [0, 1, 1]q

// 2, [0,1 ,1, 2]

// 1, [0, 1, 1, 2, 3]

// 0 return solution