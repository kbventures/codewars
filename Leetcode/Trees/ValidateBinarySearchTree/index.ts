// Time complexity: O(n) — We visit each node exactly once in the worst case, which occurs if the tree is unbalanced (skewed).

// Space complexity: O(n) — The space complexity is O(n) because, in the worst case (a completely unbalanced tree), the call stack can grow to the height of the tree (which is n in the worst case). If the tree is balanced, the space complexity would be O(log n).

// I used Infinity as a value to set an initial boundary for comparisons, ensuring that any valid node value in the binary search tree would be within the allowable range.

// validateBST.ts

    //       10
    //      /  \
    //     5   15
    //    / \   / \
    //   2   7 12  20
    //  / \   /   
    // 1   3 11    


// [10, 5, 15, 2, 7, 12, 20, 1, 3, null, null, 11, null]

const testTree = [10, 5, 15, 2, 7, 12, 20, 1, 3, null, null, 11, null]
// Min Max bound 
function isValidBST(root: TreeNode | null, min = -Infinity, max = Infinity): boolean {
    if (!root) return true;

    if (root.val <= min || root.val >= max) {
        return false;
    }

    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
}

// In order traversal 
function isValidBST(root: TreeNode | null): boolean {
    let prev: number | null = null;
    
    function inOrder(node: TreeNode | null): boolean {
        if (!node) return true;
        
        // Check left subtree
        if (!inOrder(node.left)) return false;
        
        // Check current node (must be > previous value)
        if (prev !== null && node.val <= prev) return false;
        prev = node.val;
        
        // Check right subtree
        return inOrder(node.right);
    }
    
    return inOrder(root);
}


// Comparison with Your Original Approach
// Feature	Original (Min/Max Bounds)	In-Order Traversal
// Logic	Checks bounds per node	Checks sorted order
// Time	O(n)	O(n)
// Space	O(h) (recursive stack)	O(h) (recursive stack)
// Early Exit	Yes (on bounds violation)	Yes (on order violation)
// Intuitiveness	More abstract	More visual (sorted order)


// Best For

// Min/Max Bounds		
// Dynamic range checks

// In-Order Traversal	
// Sorted order checks



