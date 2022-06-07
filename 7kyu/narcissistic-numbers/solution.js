function narcissistic(n) {

    let numberArray = String(n).split('')


    const result = numberArray.reduce((acc, e) => {
        return (Math.pow(e, numberArray.length) + acc)
    }, 0)


    return result === n ? true : false

}

