/*
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
*/


const numbers = 42513;




function digitize(n) {

  let tempString = String(n);
  let tempArr = []

  for (let i = 0; i < tempString.length; i++) {

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



// function digitize(n) {
//   function reverseNum(n, str=String(n)){
//  const thisDigit = str[str.length - 1];
//   const recursiveResult = str.length === 1 ? '' : reverseNum(str.slice(0, str.length - 1));
//   return Number(thisDigit + recursiveResult);
// }
//   const result = reverseNum(n)
//   console.log(result)
//   let myFunc = num => Number(num);

//   var intArr = Array.from(String(result), myFunc);
//   return intArr

// }


function digitize(n) {

  let tempString = String(n);
  let tempArr = []

  for (let i = 0; i < tempString.length; i++) {

    tempArr.push(Number(tempString[i]));
    console.log(tempArr)
  }

  return tempArr.reverse();
}


// function reverseNum(n, str = String(n)) {
//   const thisDigit = str[str.length - 1];
//   const recursiveResult = str.length === 1 ? '' : reverseNum(str.slice(0, str.length - 1));
//   return Number(thisDigit + recursiveResult);



https://stackoverflow.com/questions/63894367/recursive-function-to-reverse-a-number