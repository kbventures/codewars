// https://leetcode.com/problems/binary-tree-inorder-traversal/description/

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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let result = []
    function recInOrderTrav(root){
        // base case 
        if(!root) return
    
        recInOrderTrav(root.left)
        result.push(root.val)
        recInOrderTrav(root.right )
    }    

    recInOrderTrav(root)
    return result; 
};
