var countSheep = function (num) {
    //your code here
    let result = ""
    for (let i = 0; i < num; i++) {
        result = result + `${i + 1} sheep...`
    }
    return result
}