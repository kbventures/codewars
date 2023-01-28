var filterString = function (value) {
    //Complete this function :)

    let result = value.split('').reduce((acc, e) => {
        if (e.charCodeAt() > 47 && e.charCodeAt() < 58) {
            return acc + e
        }
        return acc
    }, "")
    return Number(result)
}

// Alternative

var FilterString = function (value) {
    return +value.split('').filter(n => !isNaN(n)).join('');
}