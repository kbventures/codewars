// Sort an array of 0s, 1s and 2s | Dutch National Flag problem

// Given an array A[] consisting of only 0s, 1s, and 2s. The task is to write a function that sorts the given array. The functions should put all 0s first, then all 1s and all 2s in last.

// This problem is also the same as the famous “Dutch National Flag problem”. The problem was proposed by Edsger Dijkstra. The problem is as follows:

// Given N balls of colour red, white or blue arranged in a line in random order. You have to arrange all the balls such that the balls with the same colours are adjacent with the order of the balls, with the order of the colours being red, white and blue (i.e., all red coloured balls come first then the white coloured balls and then the blue coloured balls). 

// Examples:


// Input: {0, 1, 2, 0, 1, 2}
// Output: {0, 0, 1, 1, 2, 2}

// Input: {0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1}
// Output: {0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2}


// V1
// function Sort012(arr){
//     return arr.sort(); 
// }

// const result = Sort012([2,0,1]);
// console.log(result)

// V2 Sort in place O(1) space complexity and O(n) time complexity
function Sort012(arr){
    let zero =0;
    let one = Math.floor(arr.length / 2);
    let two = arr.length -1;  

    console.log(zero,one,two)
    // while
    
}

const result = Sort012([2,0,1,2,0,1]);
console.log(result)