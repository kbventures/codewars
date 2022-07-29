// PREP
// Parameter is an array containing at least 3 whole number compromise of all odd numbers with one even
// or the opposite all even numbers with one single odd number.
// Return the odd or even number which stands out(only a single one)
// Example [11,2,4] returns 11
// Pseudocode: filter out all the odd numbers in one single array and all the even numbers in another array
// return the 0 index position number of the array with the lowest length 

function findOutlier(int) {
    var even = int.filter(a => a % 2 == 0);
    var odd = int.filter(a => a % 2 !== 0);
    return even.length == 1 ? even[0] : odd[0];
}