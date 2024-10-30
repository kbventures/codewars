// https://leetcode.com/problems/symmetric-tree/

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
var isSymmetric = function(root) {
    if (!root) return true;

    function isMirror(left, right) {
        if (!left && !right) return true; // Both are null
        if (!left || !right) return false; // One is null
        return (left.val === right.val) && 
               isMirror(left.left, right.right) && 
               isMirror(left.right, right.left);
    }

    return isMirror(root.left, root.right);
};