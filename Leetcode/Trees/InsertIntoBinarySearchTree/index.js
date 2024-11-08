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


// Scenario One No Node: Insert Node with Value
// Scenario Two One Only One Node(itself): replace with value and create left or right node or create left or right node
// If there is at least one branch we traverse that branch until we find a suitable place in the tree

    function iIaBsT(r,v){
        // base case
        if(r == null) return new Node(v)

        if(r.left && r.val > val){
                r.left = iIaBsT(r,v)
        } else if ( r.right && r.val < val){
                r.right = iIaBsT(r,v) 
            
        }
        return r; 
    }
    return iIaBsT(root,val) 

};