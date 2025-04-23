function rightSideView(root: TreeNode | null): number[] {
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
    
    const finalResult = result.map(e=>{
        if(e.length == 1) {
            return e[0]
        } else {
            return e[e.length-1]
        }
    })
    
    return finalResult
    }