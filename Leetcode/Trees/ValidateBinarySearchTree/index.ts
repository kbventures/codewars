// Time complexity: O(n) — We visit each node exactly once in the worst case, which occurs if the tree is unbalanced (skewed).

// Space complexity: O(n) — The space complexity is O(n) because, in the worst case (a completely unbalanced tree), the call stack can grow to the height of the tree (which is n in the worst case). If the tree is balanced, the space complexity would be O(log n).

// I used Infinity as a value to set an initial boundary for comparisons, ensuring that any valid node value in the binary search tree would be within the allowable range.


function isValidBST(root: TreeNode | null, min = -Infinity, max = Infinity): boolean {
    if (!root) return true;

    if (root.val <= min || root.val >= max) {
        return false;
    }

    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
}