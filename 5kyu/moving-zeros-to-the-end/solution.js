// PREP
//
// Parameter 'arr' array of elements and letters
//
// Returns this array with all 0 moved to the end
//
//
// Example moveZeros([0,1,2]) returns [1,2,0]
//
//
//Pseudocode
//
// Create new array from arr with 0's removed
// get the about of 0 in toriginal array by substracting lenght diference from original array and 
// new array without 0s
// Loop through new array without 0s the amount of times from above subractions.
// Add 0 at the end for every loop
// Return new array
function moveZeros(arr) {
    const arrWithoutZeros = arr.filter(e => e !== 0)
    const howMany = arr.length - arrWithoutZeros.length
    for (let i = 0; i < howMany; i++) {
        arrWithoutZeros.push(0);
    }
    return arrWithoutZeros;
}

// Solution
  //  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));