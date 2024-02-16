// Given a number n, find sum of first n natural numbers. To calculate the sum, we will use a recursive function recur_sum().
// Examples : 
 // Input : 3
// Output : 6
// Explanation : 1 + 2 + 3 = 6

// Input : 5
// Output : 15
// Explanation : 1 + 2 + 3 + 4 + 5 = 15

// function recur_sum(num, sum=0, index = 1){
//     if((num + 1) == index) return sum; 

//     return recur_sum(num, sum = index + sum, index + 1)
// }


// console.log(recur_sum(5))


function recur_sum(num, sum=0, index = num){
    if(index == 0) return sum; 

    return recur_sum(num, sum = index + sum, index -1)
}


console.log(recur_sum(5))
