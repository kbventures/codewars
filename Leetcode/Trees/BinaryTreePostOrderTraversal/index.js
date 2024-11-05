// https://leetcode.com/problems/binary-tree-postorder-traversal/description/
var postorderTraversal = function(root) {
    let result = []

    function postRec(r){
        // base case
        if(!r) return
        // left 
        postRec(r.left)
        // right 
        postRec(r.right)
        result.push(r.val)
    }
    postRec(root)
    return result; 
};