//Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”;
// when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

let test = 13;


function fizzBuzz(arr) {
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i]

        if (temp % 3 === 0 && temp % 5 === 0) {
            console.log('Fizz Buzz')
        } else if (temp % 3 === 0) {
            console.log("Fizz")
        } else {
            console.log("Buzz")
        }
    }

}

console.log(fizzBuzz(test))