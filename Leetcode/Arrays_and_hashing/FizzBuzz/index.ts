function fizzBuzz(n) {
    // Write your code here
    for(let i=1;i<=n;i++){
    let temp1 = i % 3
    let temp2 = i % 5;
    if(temp1 == 0 && temp2 == 0){
        console.log("FizzBuzz")
    } else if (temp1 == 0){
        console.log("Fizz")
    }  else if( temp2 == 0){
        console.log("Buzz")
    } else {
        console.log(i)
    }
    }
}