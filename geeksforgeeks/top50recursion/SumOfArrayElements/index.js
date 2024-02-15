// Given an array of integers, find sum of array elements using recursion. 

// Examples: 

// Input : A[] = {1, 2, 3}
// Output : 6
// 1 + 2 + 3 = 6

// Input : A[] = {15, 12, 13, 10}
// Output : 50



function sumArrayElement(arr, sum=0, index= arr.length - 1  ){
    if(index == -1 ) return sum;
    return sumArrayElement(arr, sum = sum + arr[index], index = index - 1)
}

console.log(sumArrayElement([1,3,6,4]));