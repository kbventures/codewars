var longestCommonPrefix = function (strs) {
    if (strs.length < 1) return strs
    let result = ""
    let test = strs[0].split("")
    for (let i = 0; i < test.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (test[i] !== strs[j][i]) return result
        }
        result += test[i]
    }
    return result;
};

// Example usage
const strs1 = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs1)); // Output: "fl"

const strs2 = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs2)); // Output: ""




