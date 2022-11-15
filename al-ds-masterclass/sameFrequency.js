/*
Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

*/

function sameFrequency(num1, num2) {
    let numero1 = {}
    let numero2 = {}
    let string1 = String(num1)
    let string2 = String(num2)

    for (let key of string1) {
        numero1[key] ? numero1[key]++ : numero1[key] = 1
    }
    for (let key of string2) {
        numero2[key] ? numero2[key]++ : numero2[key] = 1
    }

    for (let key in numero1) {
        if (numero2[key] != numero1[key]) {
            return false
        }
    }
    return true;
}





console.log(sameFrequency(182, 281)) // true
console.log(sameFrequency(34, 14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22, 222)) // false