function array(arr) {
    //Good luck
    return arr.split(',').slice(1, -1).join(' ') || null
}