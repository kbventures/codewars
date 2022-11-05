function combine(...data) {
    const result = {}; //(1)
    data.forEach(basket => { //(2)
        for (let [key, value] of Object.entries(basket)) { //(3)
            if (result[key]) { //(4)
                result[key] += value; //(5)
            } else { //(6)
                result[key] = value;
            }
        }
    });
    return result; //(7)
}

function combine(...arr) {
    return arr.reduce((acc, elem) => {
        for (const [key, value] of Object.entries(elem)) {
            if (!acc[key]) {
                acc[key] = 0;
            }

            acc[key] += value;
        }

        return acc;
    }, {})

}