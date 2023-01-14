

var containsDuplicate = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] == nums[i]) {
                return true;
            }
        }
    }
    // In case there is no match, we'll just return false
    return false;
};

//  Complexity Analysis
// Time complexity: O(n^2).
// Space complexity: O(1).


var containsDuplicate = function (nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            return true;
        }
    }
    return false;
};

// Complexity Analysis
// Time complexity: O(nlogn).
// Space complexity: O(1)
// Here sorting complexity itself is O(nlogn) and for single loop complexity O(n), So total complexity is O(nlogn).



/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let result = {}
    for (let key of nums) {
        result[key] ? result[key]++ : result[key] = 1;
        if (result[key] == 2) return true;
    }
    return false
};

// Complexity Analysis
// Time complexity: O(n).
// Space complexity: O(n).