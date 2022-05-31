//return the total number of smiling faces in the array

function countSmileys(arr) {
    let result = 0;
    let sort = [':D', ':-D', ':~D', ':)', ':-)', ':~)', ';D', ';-D', ';~D', ';)', ';-)', ';~)'];
    arr.forEach(e => {
        sort.includes(e) ? result = result + 1 : null;
    })
    return result;
}



countSmileys([':D', ':~)', ';~D', ':)'])