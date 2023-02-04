/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (t) {
    if (t.length === 0) return 0;
    let unique = [...new Set(t)]
    let sorted = unique.slice().sort((a, b) => a - b)
    let currentConsecRun = 1;
    let longRun = 1
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] + 1 === sorted[i + 1]) {
            currentConsecRun++

            if (currentConsecRun > longRun) {
                longRun = currentConsecRun
            }
            continue;
        }
        currentConsecRun = 1;
    }

    return longRun

};

// Solution
var longestConsecutive = function (nums) {
    // Handle base case of empty array
    if (!nums.length) return 0;

    // Give ability to look up nums by value
    const set = new Set(nums);
    let max = 0;

    for (const num of set) {
        // Make sure we are starting at the beginning of the sequenece
        if (set.has(num - 1)) continue;

        let currNum = num;
        let currMax = 1;

        // Look numbers that make a consecutive sequence
        while (set.has(currNum + 1)) {
            currNum++;
            currMax++;
        }
        // Update max
        max = Math.max(max, currMax);
    }

    return max;
};