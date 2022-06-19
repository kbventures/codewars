// PREP
// 
// Parameters n integer
// Parameters d integer
//
// Return: we will go thorugh all the numbers from from n starting form 0, square the and then split result in string array.
// Then we compare every element in string array to do d and increase counter whenever true


function nbDig(n, d) {

    // Iterage from 0 to n integer, square every number and keep track of how may numbers contai d integer
    // Return total 
    // your code



    //     let counter = 0;
    //     for (let i = 0; i <= n; i++) {
    //         if (String(i * i).includes(d)) {
    //             console.log('test')
    //             counter++
    //         }
    //     }
    //     return counter

    let counter = 0;
    for (let i = 0; i <= n; i++) {
        let temp = String(i * i).split('')
        temp.forEach(e => e == d ? counter++ : null)
    }
    return counter

}


  // Example:
  // nbDig(4,1) returns 2
  // nbDig(3,9) returns 1