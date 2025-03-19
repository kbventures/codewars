// Time compleity: O(log n)
// Space complexity: O(1)
function search(nums: number[], target: number): number {
    let start = 0, end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) return mid;  // Direct return on match
        if (nums[mid] < target) start = mid + 1;  // Update start
        else end = mid - 1;  // Update end
    }

    return -1;  // Target not found
}
