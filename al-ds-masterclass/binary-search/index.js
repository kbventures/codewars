/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Simplistic but not ideal solution
const search = function (nums, target) {
    return nums.indexOf(target)
};
// Iterative Solution

const search = function (nums, target) {
    let left = 0
    let right = nums.length - 1
    let mid = Math.floor((left + right) / 2)

    while (left <= right) {
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
        mid = Math.floor((left + right) / 2)
    }

    return -1
};

// Recusive Solution
var search = function (nums, target) {
    return findTarget(nums, target, 0, nums.length - 1);
};

function findTarget(nums, target, start, end) {
    if (start > end) {
        return - 1;
    }

    const mid = Math.floor((end - start) / 2) + start;
    if (nums[mid] == target) {
        return mid;
    } else if (nums[mid] > target) {
        return findTarget(nums, target, 0, mid - 1);
    } else {
        return findTarget(nums, target, mid + 1, end);
    }
}