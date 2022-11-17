function incrementer(nums) {
    if (nums == []) return []
    return nums.map((n, i) => (i + n + 1) % 10)
}