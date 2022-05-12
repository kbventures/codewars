


function centuryFromYear(year){
    let century = String(year); 
    const lastTwo = century.slice(2);
    const firstTwo = century.slice(0,2);
    console.log(firstTwo)
    return Number(lastTwo) >= 1 ?  Number(firstTwo) + 1 : Number(firstTwo); 
}

console.log(centuryFromYear(101));


module.exports = centuryFromYear;

//solution 

// function centuryFromYear(year) {
//     return Math.ceil(year/100)
// }