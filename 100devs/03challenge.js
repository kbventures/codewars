// function replaceKeyWithSpaces(str, key) {
//     let result = str;
//     key.forEach(e => {
//         result = result.replace(e, "")
//     })
//     return result;
// }



// function decodeStringThree(str) {
//     return str.replace(/[Space]/g, ' ');
// }

// console.log(
//     decodeStringThree(
//         'e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs'
//     )
// );


let secretMessage = "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"

function decodeStringThree(str) {
    return str.replace(/[ic]/g, ' ');
}

console.log(decodeStringThree(secretMessage))