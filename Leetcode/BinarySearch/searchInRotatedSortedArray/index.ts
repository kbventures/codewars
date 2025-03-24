//https://leetcode.com/problems/search-in-rotated-sorted-array/description/


function search(nums: number[], target: number): number {
    let start = 0;
    let end = nums.length - 1;

    // Find target in rotated sorted array
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        // Check if the target is found
        if (nums[mid] === target) return mid;

        // Left half is sorted
        if (nums[start] <= nums[mid]) {
            // Check if the target is in the left sorted half
            if (target >= nums[start] && target < nums[mid]) {
                end = mid - 1;  // Target is in the left half
            } else {
                start = mid + 1; // Target is in the right half
            }
        }
        // Right half is sorted
        else {
            // Check if the target is in the right sorted half
            if (target > nums[mid] && target <= nums[end]) {
                start = mid + 1; // Target is in the right half
            } else {
                end = mid - 1;  // Target is in the left half
            }
        }
    }

    // If not found
    return -1;
}