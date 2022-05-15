/*
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
*/


const numbers = 42513;




function digitize(n) {

    let tempString = String(n);
    let tempArr = []

    for(let i=0; i < tempString.length; i++){

        tempArr.push(Number(tempString[i]));
        console.log(tempArr)
    }

    return tempArr.reverse();
  }


  digitize(numbers)




module.exports = digitize;

/*
Needs one final review
*/