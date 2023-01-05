var fib = function (n) {
    let result = [0, 1]

    if (n === 0 || n === 1) return n
    for (let i = 2; i <= n; i++) {
        let temp = result[i - 2] + result[i - 1]
        result.push(temp)
    }
    return result[result.length - 1]
};

console.log(fib(4))

function fib(n) {
    if (n < 2) return n

    return fib(n - 1) + fib(n - 2)
};

console.log(fib(2))


function fibCreate() {
    let cache = {}

    return (n) => {
        if (cache[n]) {
            console.log('cache is working')
            return cache[n]
        }
        function fib(n) {
            if (n < 2) return n
            return fib(n - 1) + fib(n - 2)
        }

        let result = fib(n)
        cache[n] = result
        return result;
    };
}


let test = fibCreate()
console.log(test(5))
console.log(test(5))

