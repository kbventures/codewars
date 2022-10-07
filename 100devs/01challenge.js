// '0' < -> 'O'      '5' < -> 'S'
// '1' < -> 'I'      '6' < -> 'G'
// '2' < -> 'Z'      '7' < -> 'L'
// '3' < -> 'E'      '8' < -> 'B'
// '4' < -> 'h'      '9' < -> 'q'


// "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."
// implement fix function -> 
// "PRO-TIP #498: IT'S NICE TO SAY HELLO."


function changeString1(e) {
    // console.log(e)
    switch (e) {
        case "0": return "O"
            break;
        case "1": return "I"
            break;
        case "2": return "Z"
            break;
        case "3": return "E"
            break;
        case "4": return "h"
            break;
        case "5": return "S"
            break;
        case "6": return "G"
            break;
        case "7": return "L"
            break;
        case "8": return "B"
            break;
        case "9": return "q"
            break;
        default: return (e)
    }
}

function changeString2(e) {
    // console.log(e)
    switch (e.toUpperCase()) {
        case "0": return "0"
            break;
        case "I": return "1"
            break;
        case "Z": return "2"
            break;
        case "E": return "3"
            break;
        case "H": return "4"
            break;
        case "S": return "5"
            break;
        case "G": return "6"
            break;
        case "L": return "7"
            break;
        case "B": return "8"
            break;
        case "Q": return "9"
            break;
        default: return (e)
    }
}



function fix(str) {
    let temp = str.split(' ')
    for (let i = 0; i < temp.length; i++) {
        let current = temp[i]
        if (temp[i][0] === "#") {
            let testing = "";
            for (let y = 0; y < current.length; y++) {
                testing += changeString2(current[y])
            }
            temp[i] = testing;
            continue
        }
        let testing = "";
        for (let j = 0; j < current.length; j++) {
            testing += changeString1(current[j])
        }
        temp[i] = testing;
    }

    return temp.join(' ');
}

// console.log(fix("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."))
console.log(fix("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."))
// console.log(fix("e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"))



// Elegant solutions
// function decodeString(str) {
//     let convert = {
//       0: 'O',
//       1: 'I',
//       2: 'Z',
//       3: 'E',
//       4: 'h',
//       5: 'S',
//       6: 'G',
//       7: 'L',
//       8: 'B',
//       9: 'q',
//     };
  
//     return [...str]
//       .map((x) =>
//         x in convert
//           ? convert[x]
//           : Object.values(convert).includes(x)
//           ? Object.entries(convert).find((a) => a[1] === x)[0]
//           : x
//       )
//       .join('');
//   }
  
//   console.log(
//     decodeString("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."),
//     "PRO-TIP #498: IT'S NICE TO SAY HELLO."
//   );