// https://leetcode.com/problems/insert-into-a-binary-search-tree/

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
var insertIntoBST = function(root, val) {
    class Node{
        constructor(val){
            this.val = val;
            this.left = null; 
            this.right = null; 
            }
    }

    // base case
    if(val == null) return root; 

    if(root.val < val && root.left == null){
            const newNode = new Node(val)
            root.left = newNode;  
            val = null; 
            return 
    } else if (root.val > val && root.right == null ){
        const newNode = new Node(val)
            root.right = newNode;  
            val = null; 
            return 
    }

    if(root.val > val && root.right){
        return insertIntoBST(root.right,val)
    } else if( root.val < val && root.lef){
        return insertIntoBST(root.left,val)
        }
   
};