// PREP 
//
// Parapter String of Letters
//
// Return a transformed string following the these rules.  Every letter is the the original
// string is seperated by - , is multiplied by its - index position + 1 and every letter sections first
// letter is upper case
//
// Example accum("Zz") returns "Z-Zz"
//
// Pseudocode
//
// Split the string into an array.  
// Loop through array
// Uppder Case the first letter.
// Every array position should be the amount of its self multilied by index 0 + 1
// Example Z, Zz, Zzz, Zzzz
// Joinn the array with - and return result

// function accum(s) {
// 	// your code
//   return s.split('').map((e,i)=>{ 
//       return e.toLowerCase().repeat(i+1)
//   }).map(e=> e.charAt(0).toUpperCase() + e.slice(1)).join('-')
// }



// function accum(s) {
// 	// your code
//   return s.split('').map((e,i)=>{ 
//       let temp = e.toLowerCase().repeat(i+1)
//       return temp.charAt(0).toUpperCase() + temp.slice(1);
//   }).join('-')
// }

function accum(s) {
    // your code
    return s.split('').map((e, i) => {
        let temp = e.toLowerCase().repeat(i + 1)
        return temp.charAt(0).toUpperCase() + temp.slice(1);
    }).join('-')
}

/*
function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
*/