//Prep
//
// Parameter array a containers integers and array b contains integers
//
// Return array that doesn't contain any of the integers in array b
function arrayDiff(a, b) {

    //Pseudocode
    // Loop through inters array that need removal
    // for each interger looped.. filter this integer out of array a and update 
    // Return result

    for (let i = 0; i < b.length; i++) {
        a = a.filter(e => e != b[i])
    }
    return a;
}

  // Example
  // [1,2,3,4],[1] returns [2,3,4]