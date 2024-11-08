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
    function iIaBsT(r,v){
        // base case
        if(r === null) {
            return new Node(v)
        }
        if(val < r.val){
                r.left = iIaBsT(r.left,v)
        } else if (val > r.val){
                r.right = iIaBsT(r.right,v) 
            
        }
        return r; 
    }
    
    return iIaBsT(root,val) 
};