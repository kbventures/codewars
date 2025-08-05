
// This function generates all possible subsets of the given array.
function subsets(nums: number[]): number[][] {
    // 'allSubsets' will store all the subsets.
    const allSubsets: number[][] = [];
  
    // 'currentSubset' is a temporary storage to build each subset.
    let currentSubset: number[] = [];

    // Helper function to perform depth-first search to build subsets.
    const buildSubsets = (index: number): void => {
        // If the current index is equal to the length of 'nums',
        // a subset is complete and we can add a copy to 'allSubsets'.
        if (index === nums.length) {
            allSubsets.push(currentSubset.slice());
            console.log(allSubsets)
            return;
        }
        // Recursive case 1: Exclude the current element and move to the next.
        buildSubsets(index + 1);
      
        // Include the current element in the 'currentSubset'.
        currentSubset.push(nums[index]);

        // Recursive case 2: Include the current element and move to the next.
        buildSubsets(index + 1);

        // Backtrack: Remove the last element before going up the recursive tree.
        currentSubset.pop();
    };

    // Start building subsets from the first index.
    buildSubsets(0);
    return allSubsets;
}