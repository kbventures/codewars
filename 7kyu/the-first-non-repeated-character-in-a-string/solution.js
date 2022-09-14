function firstNonRepeated(s) {
    // your code here

    let notRepeated = s[0]
    let tempIsRepeated = false;

    for (let i = 0; i < s.length; i++) {


        if (tempIsRepeated) {
            notRepeated = s[i]
            tempIsRepeated = false;
        }

        for (let j = 1; j < s.length; j++) {
            console.log(s[i], s[j])
            if (s[i] === s[j]) {

                tempIsRepeated = true;
            }
        }
    }

    console.log(notRepeated)
    return notRepeated

}

firstNonRepeated('test')