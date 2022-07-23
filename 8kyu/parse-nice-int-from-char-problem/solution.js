function getAge(inputString) {
    // return the girl's correct age as an integer. Happy coding :) 
    return Number(inputString.slice(0, 1))
}

// alternative solution

function getAge(inputString) {
    return +inputString[0];
}

function getAge(inputString) {
    return parseInt(inputString[0]);
}