const reverseSeq = n => {
    let tempArray = [];
    while(n>0){
        tempArray.push(n);
        n -= 1;
        console.log(n)
    }
    return tempArray;
  };



 module.exports = reverseSeq;



 // solution

//  const reverseSeq = n => {
//     return Array(n).fill(0).map((e, i) => n - i );
//   };