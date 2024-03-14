// Find the only repetitive element between 1 to N-1
// Given an array of size N filled with numbers from 1 to N-1 in random order. The array has only one repetitive element. The task is to find the repetitive element.

// Examples:

// Input: a[] = {1, 3, 2, 3, 4}
// Output: 3
// Explanation: The number 3 is the only repeating element.

// Input: a[] = {1, 5, 1, 2, 3, 4}
// Output: 1

function FindOnlyRepNum(arr){
    let HashMap = {}
    for(let zulu of arr){
        if(!HashMap[zulu]){
            HashMap[zulu]=1;
        } else {
            HashMap[zulu]++
            if(HashMap[zulu]>1){
                return zulu 
            }
        }
    }
    return 0;
}

const result = FindOnlyRepNum([1,3,2,3,4])
console.log(result)