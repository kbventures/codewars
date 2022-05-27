function howMuchILoveYou(nbPetals) {
    let x;
    if (nbPetals < 7) {
        console.log('test 1')
        x = nbPetals;
    } else if (nbPetals % 6 === 0) {
        console.log('test2')
        x = 6;
    } else {
        console.log('test 3')
        x = nbPetals % 6;
    }


    switch (x) {
        case 1:
            return 'I love you'
        case 2:
            return 'a little'
        case 3:
            return 'a lot'
        case 4:
            return 'passionately'
        case 5:
            return 'madly'
        case 6:
            return 'not at all'
    }
}