// DFS Recursive version
// Time: O(n) - visits each node exactly once
// Space: O(n) - call stack depth equals tree height (worst case n for skewed tree)
function maxDepth(root: TreeNode | null): number {
if(!root) return 0

return Math.max(maxDepth(root.left) + 1, maxDepth(root.right)+1)
};

// Iterative BFS Queue
// Time: O(n) - visits each node exactly once
// Space: O(w) - where w is maximum width of tree level
function maxDepth(root: TreeNode | null): number {
if (!root) return 0;
const queue: TreeNode[] = [root];
let depth = 0;
while (queue.length > 0) {
const levelSize = queue.length;
depth++;
// Process all nodes at current level
for (let i = 0; i < levelSize; i++) {
const node = queue.shift()!;
if (node.left) queue.push(node.left);
if (node.right) queue.push(node.right);
}
}
return depth;
}
// Why BFS with Queue is Best Suited for Max Depth:

// Natural level counting - BFS processes tree level by level, making depth calculation intuitive
// Space efficiency for deep trees - Queue holds nodes at current level (width) vs stack holding entire path (height)
// Direct depth measurement - Each while loop iteration = one level deeper, no need for recursive math
// Better worst-case space - For tall, narrow trees: queue uses O(log n) vs stack using O(n)
// Explicit level tracking - Can easily track which level you're on without complex recursion
// No stack overflow risk - Uses heap memory instead of limited call stack

// Bottom line: BFS naturally maps to "how many levels deep is this tree?" making it conceptually cleaner for depth problems.
