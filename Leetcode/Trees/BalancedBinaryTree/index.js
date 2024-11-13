// https://leetcode.com/problems/balanced-binary-tree/
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
 * @return {boolean}
 */

// Solution
var isBalanced = function(root) {
      // Helper function to compute the depth of the tree and check for balance
  // Returns the height of a node or -1 if the subtree is not balanced
  function depthFirstSearch(node) {
    // An empty node has a depth of 0
    if (node === null) {
      return 0;
    }

    // Recursively obtain the depth of the left subtree
    const leftDepth = depthFirstSearch(node.left);
    // Recursively obtain the depth of the right subtree
    const rightDepth = depthFirstSearch(node.right);

    // If the left or right subtree is not balanced, or the difference
    // between their depths is more than 1, the current subtree is not balanced
    if (leftDepth === -1 || rightDepth === -1 || Math.abs(leftDepth - rightDepth) > 1) {
      return -1;
    }

    // Depth of current node is 1 plus the maximum depth of its left or right subtrees
    return 1 + Math.max(leftDepth, rightDepth);
  }

  // The tree is balanced if the depth first search does not return -1
  return depthFirstSearch(root) > -1;
};