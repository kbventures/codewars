function invertTree(root: TreeNode | null): TreeNode | null {

    if(!root) return root
    
    let temp = root.left
    root.left = root.right;
    root.right = temp;
    
    invertTree(root.left)
    invertTree(root.right)
    
    return root
    };
    