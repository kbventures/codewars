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



/*
1.Create an empty hash
2.Insert all array elements to hash
3.Do following for every element arr[i]
4. Check if this element is the starting point of a subsequence. 
To check this, simply look for arr[i]-1 in the hash, if not found
, then this is the first element of a subsequence.
5. If this element is the first element, then count the number of elements in the consecutive starting with
this element. Iterate from arr[i] +1 till the last element can be found. 
6. If the coun tis more than the previosu longuest subsequence found, then upate this. 
*/

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


