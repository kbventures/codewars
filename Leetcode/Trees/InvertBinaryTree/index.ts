/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
// Time: O(n) - visits each node exactly once
// Space: O(n) - call stack depth equals tree height (worst case n for skewed tree)
function invertTree(root: TreeNode | null): TreeNode | null {
        if(!root) return root

        let temp = root.left
        root.left = root.right;
        root.right = temp; 

        invertTree(root.left) 
        invertTree(root.right)

        return root; 
};

// Time: O(n) - visits each node exactly once
// Space: O(h) - where h is height of tree (O(log n) balanced, O(n) skewed)
function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return root;
   
    const stack: TreeNode[] = [root];
   
    while (stack.length > 0) {
        const node = stack.pop()!; // DFS: Last In, First Out
       
        // Swap left and right children
        const temp = node.left;
        node.left = node.right;
        node.right = temp;
       
        // Push children to stack (DFS order)
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }
   
    return root;
}


// Why use DFS with stack over recursion:

// Prevents stack overflow for very deep trees
// Better memory control - Use heap memory instead of limited call stack, monitor stack size in real-time, set custom limits to prevent crashes, essential for production systems and embedded devices
// Allows custom logic like debugging and pause/resume

// TL;DR: Use recursion normally, but iterative stack when you need more control or safety.