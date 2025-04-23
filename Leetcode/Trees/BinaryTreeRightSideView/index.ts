
// Iterative (BFS):
// Time: O(n) as each node is processed once; Space: O(n) for the queue and result storage.

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

    // Recursive version
    // Recursive (DFS):
    // Time: O(n) because we visit every node; Space: O(n) due to recursion stack and result array.
    
function rightSideView(root: TreeNode | null): number[] {
const result: number[][] = [];

function dfs(node: TreeNode | null, depth: number) {
if (!node) return;
if (result.length === depth) result.push([]);
result[depth].push(node.val);
dfs(node.left, depth + 1);
dfs(node.right, depth + 1);
}

dfs(root, 0);

const finalResult = result.map(e=>{
    if(e.length == 1) {
        return e[0]
    } else {
        return e[e.length-1]
    }
})

return finalResult
}