function isSubsetOf(s1, s2) {
    let arr2 = [...s2]
    let arr1 = [...s1]
    return arr1.every(v => arr2.includes(v))
}

function isSupersetOf(s1, s2) {
    let arr2 = [...s2]
    let arr1 = [...s1]
    return arr2.every(v => arr1.includes(v))
}