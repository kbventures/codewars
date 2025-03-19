function search(nums: number[], target: number): number {
    // Edge case length is 1
    if(nums.length == 1){
        return nums[0] == target ? 0 : -1
    }

    let start = 0; 
    let end = nums.length - 1 
    let mid = Math.floor((start + end) / 2)

    while(start <= end){
        // Check if number found and if found return index
        if(nums[mid] == target){
            return mid
        } else if (nums[mid] < target) {
            start = mid + 1
        } else {
            // nums[mid] > target
            end = mid -1
        }
        mid = Math.floor((start + end) / 2)

    }
    // Default result
    return -1
};