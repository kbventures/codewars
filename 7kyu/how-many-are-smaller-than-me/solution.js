function smaller(nums) {
    //code me
    let result = []
    for (let i = 0; i < nums.length; i++) {
        let temp = 0
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                temp++
            }
        }
        result.push(temp)
    }
    return result;
}