//PREP
// P:arameeters: String for Word that needs to be encoded, n for the cypher key
// R:eturns an endoded version of the str using n cypher: []

function encode(str, n) {
    //P:pseudocode
    // create number system object
    // Make Array Out of Cypher Key
    // Cypher your systemobject using cypher key array
    // transform string in to array
    // loop though array and convert tonumber array corresponding to number system
    // Convert number array using cypher
    // Return Array

    let result = [];

    let numberSystem = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,

        e: 5,
        f: 6,
        g: 7,
        h: 8,

        i: 9,
        j: 10,
        k: 11,
        l: 12,

        m: 13,
        n: 14,
        o: 15,
        p: 16,

        q: 17,
        r: 18,
        s: 19,
        t: 20,

        u: 21,
        v: 22,
        w: 23,
        x: 24,

        y: 25,
        z: 26
    }

    let cypher = String(n).split('')
    let cypherLength = (cypher.length - 1);
    let counter = 0;
    // for (const key in numberSystem) {
    //     console.log(`${key}: ${numberSystem[key]}`);
    //     numberSystem[key] = numberSystem[key] + Number(cypher[counter]);
    //     console.log(`${key}: ${numberSystem[key]}`);

    // if (counter == cypherLength) {
    //     counter = 0
    //     console.log('test')
    //     console.log('\b')

    // } else {
    //     counter++
    // }

    // }


    let stringArray = str.split('')

    for (let i = 0; i < stringArray.length; i++) {
        //   str[i] = numberSystem[i]
        let temp = numberSystem[str[i]] + Number(cypher[counter])
        result.push(temp)


        if (counter == cypherLength) {
            counter = 0
        } else {
            counter++
        }



        // console.log(`${key}: ${numberSystem[key]}`);
        // numberSystem[key] = numberSystem[key] + Number(cypher[counter]);
        // console.log(`${key}: ${numberSystem[key]}`);

        // if (counter == cypherLength) {
        //     counter = 0
        //     console.log('test')
        //     console.log('\b')

        // } else {
        //     counter++
        // }


    }
    console.log(result)
    return result;
}



//E:ample  encode("scout", 1939)


const test = encode('scout', 1939)
// console.log(test)