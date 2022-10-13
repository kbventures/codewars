//Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”;
// when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

let test = 13;


function fizzBuzz(arr) {
    for (let i = 1; i <= arr; i++) {
        let temp = i;
        if (temp % 3 === 0 && temp % 5 === 0) {
            console.log('Fizz Buzz')
        } else if (temp % 3 === 0) {
            console.log("Fizz")
        } else if (temp % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }

}

fizzBuzz(test)


//solution


/*
// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

//num with no funny biz
//log each num or the appr word
//n = 5 -> 1, 2, fizz, 4, buzz
//n = 9 -> 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz
//n = 15 ->  1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz

function fizzBuzz(num){
  //for loop from 1 to num 
  for(let i = 1; i <= num; i++){
    //conditional 
    //if num % 3 && num % 5 === 0 -> fizzBuzz
    if(i % 3 === 0 && i % 5 === 0){
      console.log('fizzBuzz')
    }else if(i % 3 === 0){
      console.log('fizz')
    }else if( i % 5 === 0 ){
      console.log('buzz')
    }else{
      console.log(i)
    }
    //if num % 3 === 0 -> fizz
    //if num % 5 === 0 -> buzz
    //log the num
  }
}

fizzBuzz(5) //1, 2, fizz, 4, buzz
fizzBuzz(9) //1, 2, fizz, 4, buzz, fizz, 7, 8, fizz
fizzBuzz(15) //1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz
*/