function addBinary(a, b) {
    let total = a + b;
    let binary = ''
    while (total !== 0) {
        binary = String(total % 2) + binary;
        total = Math.floor(total / 2);
    }
    return binary;

}

// function addBinary(a,b){
//     return (a+b).toString(2)
//   }


console.log(addBinary(1, 12));