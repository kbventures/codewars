// Version 1
function well(x) {
    let result = 0;
    for (let i = 0; i < x.length; i++) {
        for (j = 0; j < x[i].length; j++) {
            if (String(x[i][j]).toLowerCase() === 'good') {
                result++
            }
        }
    }
    if (result > 2) {
        return "I smell a series!"
    } else if (result > 0) {
        return "Publish!"
    } else {
        return "Fail!"
    }
}

