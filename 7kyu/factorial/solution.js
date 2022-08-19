function factorial(n) {
    //your code here
    let counter = 1
    let factorial = 1;
    console.log(n)
    while (counter <= n) {
        factorial *= counter
        console.log(factorial)
        counter++
    }

    return factorial
}