// Time: O(n · n!)
// Space: O(n)

// Start: []
// ├── Pick 1 → [1]
// │   ├── Pick 2 → [1,2]
// │   │   └── Pick 3 → [1,2,3] ✓
// │   └── Pick 3 → [1,3]
// │       └── Pick 2 → [1,3,2] ✓
// ├── Pick 2 → [2]
// │   ├── Pick 1 → [2,1]
// │   │   └── Pick 3 → [2,1,3] ✓
// │   └── Pick 3 → [2,3]
// │       └── Pick 1 → [2,3,1] ✓
// └── Pick 3 → [3]
//     ├── Pick 1 → [3,1]
//     │   └── Pick 2 → [3,1,2] ✓
//     └── Pick 2 → [3,2]
//         └── Pick 1 → [3,2,1] ✓

function permute(nums: number[]): number[][] {
    let result: number[][] = []

function dfs(arr: number[]) {
    if (arr.length == nums.length) {
        result.push([...arr])
        return
    }
    for (let num of nums) {
        if (arr.includes(num)) continue  // already used
        arr.push(num)                     // pick
        dfs(arr)                          // go deeper
        arr.pop()                         // erase (backtrack)
    }
}

dfs([])  // start with empty array, not [[]]

    return result; 
};
