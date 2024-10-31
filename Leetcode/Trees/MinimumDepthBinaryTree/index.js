// https://leetcode.com/problems/minimum-depth-of-binary-tree/description/

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
function minDepth(node) {
    if (!node) return 0; // Base case for an empty node

    // If it's a leaf node
    if (!node.left && !node.right) return 1;

    // Recursive depth calculation
    const leftDepth = node.left ? minDepth(node.left) : 0; // 0 if no left child
    const rightDepth = node.right ? minDepth(node.right) : 0; // 0 if no right child

    // If one side is zero (no child), return the depth of the other side plus one
    if (leftDepth === 0) return rightDepth + 1; // Only right child exists
    if (rightDepth === 0) return leftDepth + 1; // Only left child exists

    // Both children exist, return the minimum depth plus one for the current node
    return Math.min(leftDepth, rightDepth) + 1;
}