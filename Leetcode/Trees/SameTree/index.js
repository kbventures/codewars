// https://leetcode.com/problems/same-tree/description/



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // base case
     if (p === null && q === null) return true;
    // if one node is null (but not both) or values don't match
    if (p === null || q === null || p.val !== q.val) return false;
    console.log(p.val, q.val)
    return isSameTree(p.left,q.left) && isSameTree(p.right,q.right)
    };