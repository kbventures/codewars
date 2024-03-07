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

//V2 Counting

// function Sort012(arr){
// let zero =0
// let one = 0;
// let two =0;

// for(let i = 0; i < arr.length;i++){
//     console.log(arr[i])
//     if (arr[i]==0){
//         zero++
//     } else if (arr[i]==1){
//         one++
//     } else{
//         two++
//     }
// }

// console.log(zero, one, two )
// for(let i = 0; i <= arr.length-1;i++){
//     if (zero != 0){
//         arr[i] = 0; 
//         zero--
//     } else if (one != 0){
//         arr[i] = 1
//         one--
//     } else{
//         arr[i] = 2
//         two--
//     }
// }

// return arr; 
// }

// const result = Sort012([0,2,1,0,1,2,2,0,0,1,1])

// console.log(result);

// V3 Pointer approach
    function Sort012(a)
    {
         
        let lo = 0; 
        let hi = a.length - 1; 
        let mid = 0;
        let temp = 0; 
        while (mid <= hi)
        {
            // If the element is 0
            if(a[mid] == 0)
            {
                temp = a[lo]; 
                a[lo] = a[mid]; 
                a[mid] = temp; 
                lo++; 
                mid++; 
            }
            // If the element is 1
            else if(a[mid] == 1)
            {
                mid++; 
            }
            // If the element is 2
            else
            {
                temp = a[mid]; 
                a[mid] = a[hi]; 
                a[hi] = temp; 
                hi--;
            }
             
        }
        return a; 
    }

    const result = Sort012([0,1,2,0,0,2,2,1,0,2])

    console.log(result)