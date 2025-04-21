function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	
    while(root){
        if (root.val < p.val && root.val < q.val){
            root = root.right;
        } else if (root.val > p.val && root.val > q.val){
            root = root.left; 
        } else {
            return root; 
        }
    }

    return null; 
};