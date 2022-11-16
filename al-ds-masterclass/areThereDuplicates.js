// Brivety
function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
}

// Hash Table
function areThereDuplicates(...arr) {
    let result = {}
    for (let key of arr) {
        result[key] ? result[key]++ : result[key] = 1
    }
    for (let key in result) {
        if (result[key] > 1) {
            return true
        }
    }
    return false;
}


// Multiple Pointer

function areThereDuplicates(...arr) {
    let pointerStart = 0;
    let pointerNext = 1;

    while (pointerStart < pointerNext) {
        console.log(arr[pointerStart], arr[pointerNext])
        if (arr[pointerStart] == arr[pointerNext]) {
            return true;
        } else if (pointerStart == arr.length - 2 && pointerNext == arr.length - 1) {
            return false
        }
        else {
            if (pointerNext !== arr.length - 1) {
                pointerNext++
            }
            else {
                pointerStart++
                pointerNext = pointerStart + 1;
            }
        }
    }
}

function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a, b) => a > b);
    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true
        }
        start++
        next++
    }
    return false
}




console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 