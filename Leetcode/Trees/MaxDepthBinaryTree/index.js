// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

// 104. Maximum Depth of Binary Tree
// Easy
// Topics
// Companies
// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
2

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:

// Input: root = [1,null,2]
// Output: 2
 

// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// -100 <= Node.val <= 100

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {

    if(!root) return 0; 

    const left = maxDepth(root.left)
    const right = maxDepth(root.right)

    return 1 + Math.max(left, right)
    
};

// Time complexity O(n) and space complexity is O(n)
function maxDepth(root: TreeNode | null): number {
if (root === null) {
return 0;
}

return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));

};