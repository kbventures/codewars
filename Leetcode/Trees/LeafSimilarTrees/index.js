// https://leetcode.com/problems/leaf-similar-trees/description/


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let r1sequence = [];
    let r2sequence = [];

    function lSt1(r){
        if(!r.left && !r.right){
            r1sequence.push(r.val)
            return
        } else if(!r){
            return 
        }

        lSt1(r.left)
        lSt1(r.right)
        return
    }

        function lSt2(r){
        if(!r.left && !r.right){
            r2sequence.push(r.val)
            return
        } else if(!r){
            return 
        }

        lSt2(r.left)
        lSt2(r.right)
    }

    lSt1(root1)
    lSt2(root2)
    console.log(r1sequence, r2sequence)
    return JSON.stringify(r1sequence) == JSON.stringify(r2sequence)
};