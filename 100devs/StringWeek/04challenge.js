function reverseReverse(str) {
    // console.log(haha.length)
    return str.split(' ').reverse().map(e => {
        return e.split('').reverse().join('')
    }).join(' ')
}

let update = "e!!Igv)t5lltB vbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjD 4I50 v#ylhgmQfs"


console.log(reverseReverse(update))


const testSuite = {
    challenge01: function (str) {
        function changeString1(e) {
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
        let temp = str.split(' ')
        console.log(temp)
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
        console.log(temp.join(' '))
        return temp.join(' ');

    },
    challenge02: function (str) {
        console.log(str)
        return str
    }
};

// const result = testSuite
//     .challenge01(secretMessage)
//     .challenge02()

// console.log(result)
// console.log(secretMessage.length)
// console.log(result.length);


