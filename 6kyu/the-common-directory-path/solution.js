const paths = [
    '/home/user1/tmp/coverage/test',
    '/home/user1/tmp/covert/operator',
    '/home/user1/tmp/coven/members',
];

function getCommonDirectoryPath(paths) {
    // good luck

    const splitStrings = (a, sep = '/') => a.map(i => i.split(sep));
    const elAt = i => a => a[i];
    const rotate = a => a[0].map((e, i) => a.map(elAt(i)));
    const allElementsEqual = arr => arr.every(e => e === arr[0]);

    const commonPath = (input, sep = '/') => rotate(splitStrings(input, sep))
        .filter(allElementsEqual).map(elAt(0)).join(sep);

}

// read the problem out loud
// restate the problem in our own words
// ask clarifying questions(edge case)
// give examples
// WRite our pseudocode
// write tests
// write code
// repeat 5 and 6
//Don't sumit until you think you passed



