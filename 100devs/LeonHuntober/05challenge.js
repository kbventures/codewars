//You will be given an array of numbers in which two numbers occur once and the rest occur only twice. 
//Your task will be to return the sum of the numbers that occur only once.

//For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.



function repeats(arr) {
    let temp = {}
    let result = 0;
    let counter = 0;
    for (let key of arr) {
        temp[key] ? temp[key]++ : temp[key] = 1;
    }
    for (let key in temp) {

        if (temp[key] === 1) {
            result += Number(key)
            counter++
        }
        if (counter === 2) return result;
    }
    return result;

};

function repeats(arr) {
    return arr.filter(v => arr.indexOf(v) === arr.lastIndexOf(v)).reduce((a, b) => a + b, 0);
};




repeats([4, 5, 7, 5, 4, 8]), 15)
repeats([9, 10, 19, 13, 19, 13]), 19)
repeats([16, 0, 11, 4, 8, 16, 0, 11]), 12)
repeats([5, 17, 18, 11, 13, 18, 11, 13]), 22)
repeats([5, 10, 19, 13, 10, 13]), 24)



