function solution(string) {
    let splitStr = string.split("");
    let newStr = string.split("");
    let capStr = string.toUpperCase().split("");
    for (i = splitStr.length - 1; i >= 0; i--) {
        if (splitStr[i] === capStr[i]) {
            newStr.splice(i, 0, ' ');
        }
    }
    return newStr.join("");
}