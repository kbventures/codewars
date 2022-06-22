function moonRating(rating) {
    //your code goes here

    let results = {
        0: 'xxxxx',
        1: 'cxxxx',
        2: 'oxxxx',
        3: 'ocxxx',
        4: 'ooxxx',
        5: 'oocxx',
        6: 'oooxx',
        7: 'ooocx',
        8: 'oooox',
        9: 'ooooc',
        10: 'ooooo'
    }

    return results[Math.round(r)]

}

