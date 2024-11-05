
// https://leetcode.com/problems/search-in-a-binary-search-tree/description/
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    function sBst(root){
        if(!root) return
        if(root.val == val) return root
        
        return sBst(root.left) || sBst(root.right)
    }
    const valueFoundOrNot = sBst(root)

    if(valueFoundOrNot ==  null) return null; 
    // Result
    return valueFoundOrNot
};

