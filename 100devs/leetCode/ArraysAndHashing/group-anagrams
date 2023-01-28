
// Version 1
var groupAnagrams = function (arr) {
    let hash = {}
    let solution = []
    for (let key of arr) {
        hash[key.split('').sort()] = []
    }
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i].split('').sort()
        hash[temp].push(arr[i])
    }

    for (let key in hash) {
        solution.push(hash[key])
    }

    return solution;
}

// Version 2

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (arr) {
    let hash = {}
    let solution = []
    for (let key of arr) {
        let temp = key.split('').sort()
        hash[temp] ? hash[temp].push(key) : hash[temp] = [key]

    }
    for (let key in hash) {
        solution.push(hash[key])
    }
    return solution;
}




// Version 3

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

var groupAnagrams = function (strs) {
    let hash = {}

    strs.forEach(str => {
        let letters = str.split('').sort()

        hash[letters] ? hash[letters].push(str) : hash[letters] = [str]
    })

    const keys = Object.keys(hash);
    const values = keys.map(function (v) { return hash[v]; });
    return values

};

groupAnagrams(strs)


