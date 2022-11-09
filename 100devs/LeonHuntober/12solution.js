function arrayDiff(a, b) {
    // @params: two arrays, a and b.
    // @return: one array.
    // @eg: a = [2,3], b = [2] => [3]
    // a = [], b = [6,6] => []
    // a = [1,2,3], b = [1,2,2,2,2,2,2,3] => [3]
    // @pseudo: 
    /*
      Loop through array a using filter and remove any instances of any element
      that also appears in b
    */

    const set = new Set(b);
    return a.filter(x => !set.has(x))
}