//Given an array of numbers, return all pairs that add up to a given sum.The numbers can be used more than once.


function twoSum(numbers, sum) {
    // Store the pairs that add up to the given sum
    const pairs = [];

    // Loop through the numbers array
    for (let i = 0; i < numbers.length; i++) {
        // Loop through the numbers array again, starting at the next index
        for (let j = i + 1; j < numbers.length; j++) {
            // Check if the current numbers add up to the given sum
            if (numbers[i] + numbers[j] === sum) {
                // If they do, add them to the pairs array
                pairs.push([numbers[i], numbers[j]]);
            }
        }
    }

    // Return the pairs
    return pairs;
}


function twoSum(arr, sum) {
    const pairs = []
    const nums = {}


    for (const num1 of arr) {
        const num2 = sum - num1;
        if (nums[num2]) {
            pairs.push([num1, num2])
        } else {
            nums[num1] = 1
        }
    }
    return pairs;
}