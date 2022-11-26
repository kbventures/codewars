function listToArray(list) {
    var temp = [];
    while (list) {
        temp.push(list.value);
        list = list.next;
    }
    return temp;
}

function listToArray(list) {
    var array = [];
    for (var node = list; node; node = node.next)
        array.push(node.value);
    return array;
}