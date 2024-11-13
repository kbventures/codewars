
// Question 1 of 10
// What's the output of running the following function using input 56?

const KEYBOARD = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
}

function letter_combinations_of_phone_number(digits) {
    let res = [];
    dfs(digits, [], res);
    return res;
}

function dfs(digits, path, res) {
    if (path.length === digits.length) {
        res.push(path.join(''));
        return;
    }
    let next_number = digits.charAt(path.length);
    for (let letter of KEYBOARD[next_number]) {
        path.push(letter);
        dfs(digits, path, res);
        path.pop();
    }
}


// digits 56, path [], res []


// 56, j []
// 56 jm []

// res = jm

// 56 j [jm, n]

