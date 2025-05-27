// /**
// * @param {number[]} nums}
// * @return {number[][]}
// */

// V1 Brute force

// Time Complexity: The three nested loops each iterate through the entire array, resulting in O(n³) time complexity.

// Space Complexity: The space complexity is O(n) due to the seen set that stores unique triplets.

// function threeSum(nums: number[]): number[][] {
// const res: number[][] = [];
// const seen = new Set<string>();

// for (let i = 0; i < nums.length; i++) {
// for (let j = i + 1; j < nums.length; j++) {
// for (let k = j + 1; k < nums.length; k++) {
// if (nums[i] + nums[j] + nums[k] === 0) {
// const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
// const key = triplet.join(",");
// if (!seen.has(key)) {
// seen.add(key);
// res.push(triplet);
// }
// }
// }
// }
// }

// return res;
// }

// V2 Two Pointer approach that eliminates one nested loops but doesn't skip duplicates
// Time complexity: O(n²) — one loop with nested two-pointer scan.
// Space complexity: O(n²) — for storing unique triplets in the Set and result array.
function threeSum(nums: number[]): number[][] {
// Sort the array to enable two-pointer strategy and handle duplicates
let numsAsc = nums.sort((a, b) => a - b);

let numSet = new Set<string>();
let result: number[][] = [];

// Fix the first number and use two pointers for the remaining pair
for (let x = 0; x < nums.length - 2; x++) {
let mid = x + 1;
let end = nums.length - 1;

while (mid < end) {
let tempSum = numsAsc[x] + numsAsc[mid] + numsAsc[end];

if (tempSum > 0) {
end--;
} else if (tempSum < 0) {
mid++;
} else {

let tempKey = [numsAsc[x], numsAsc[mid], numsAsc[end]].join(',');
if (!numSet.has(tempKey)) {
numSet.add(tempKey);
result.push([numsAsc[x], numsAsc[mid], numsAsc[end]]);
}
mid++;
}
}
}

return result;
}

// V3 Skips duplicates

// Time Complexity:
// Sorting the array takes O(n log n).

// The outer loop runs O(n) times.

// The inner while loop (two-pointer approach) runs O(n) for each iteration of the outer loop.

// Overall time complexity: O(n log n) + O(n²) → Simplified to O(n²).

// Space Complexity:
// O(n) for the output array res to store the result triplets.

// O(1) for the extra variables (left, right, sum), which are constant space.

// Overall space complexity: O(n) due to the result array.
function threeSum(nums: number[]): number[][] {
// Sort the array to easily skip duplicates and use two pointers
nums.sort((a, b) => a - b);
const res: number[][] = [];

// Iterate through the array, fixing one element at a time
for (let i = 0; i < nums.length - 2; i++) {
// Skip duplicate values of the fixed element
if (i > 0 && nums[i] === nums[i - 1]) continue;

let left = i + 1, right = nums.length - 1;

// Use two pointers to find pairs that sum to 0
while (left < right) {
const sum = nums[i] + nums[left] + nums[right];

if (sum === 0) {
// If the sum is 0, add the triplet to the result
res.push([nums[i], nums[left], nums[right]]);
// Skip duplicates for the left pointer
while (left < right && nums[left] === nums[left + 1]) left++;
// Skip duplicates for the right pointer
while (left < right && nums[right] === nums[right - 1]) right--;
// Move both pointers inward
left++;
right--;
} else if (sum < 0) {
// If the sum is less than 0, move the left pointer to the right
left++;
} else {
// If the sum is greater than 0, move the right pointer to the left
right--;
}
}
}

// Return the result with all unique triplets
return res;
}