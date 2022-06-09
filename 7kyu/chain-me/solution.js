
function chain(input, fs) {
    // implement the "chain" function

    // return fs[1](fs[0](input));
    return fs.reduce(function (input, fn) { return fn(input) }, input);

}

function add(x) {
    return x + 10;
}

function mult(x) {
    return x * 30;
}



const result = chain(5.891839987285257, [add, mult])
console.log(result)


//  5.891839987285257 to equal 26.755199618557715