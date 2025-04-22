// Brute froce

function levelOrder(root: TreeNode | null): number[][] {
    let result: number[][] = []
    if(!root) return result;
    
    let queue: TreeNode[] = [root]
    
    while(queue.length !== 0){
    
    const levelLength = queue.length
    const currentLevelValues: number[] = []
    
    for(let x =0; x<levelLength;x++){
    const currNode = queue.shift()
    currentLevelValues.push(currNode.val)
    if(currNode.left) queue.push(currNode.left)
    if(currNode.right)queue.push(currNode.right)
    }
    result.push(currentLevelValues)
    }
    return result;
    };
    

    
    // Optimized for longer trees
    function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];
    
    const result: number[][] = [];
    const queue: TreeNode[] = [root];
    let start = 0;
    
    while (start < queue.length) {
    const end = queue.length;
    const level: number[] = [];
    
    for (let i = start; i < end; i++) {
    const node = queue[i];
    level.push(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
    }
    
    result.push(level);
    start = end;
    }
    
    return result;
    }

    // Recursive version
    function levelOrder(root: TreeNode | null): number[][] {
    const result: number[][] = [];

    function dfs(node: TreeNode | null, depth: number) {
        if (!node) return;
        if (result.length === depth) result.push([]);
        result[depth].push(node.val);
        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    }

    dfs(root, 0);
    return result;
}

    