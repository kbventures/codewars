const xMarksTheSpot = (input) => {
    let counter = false;
    let coordinate = [];
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] === 'x') {
                if (counter === true) {
                    return []
                }
                coordinate.push(i)
                coordinate.push(j)
                counter = true;
            }
        }
    }
    return coordinate;
}