// https://leetcode.com/problems/diameter-of-binary-tree/submissions/1601666563/

function diameterOfBinaryTree(root: TreeNode | null): number {
    let maxDiameter = 0;  // This will store the maximum diameter.

    function dfs(node: TreeNode | null): number {
        if (!node) return 0;

        // Recursively calculate the height of the left and right subtrees
        const leftHeight = dfs(node.left);
        const rightHeight = dfs(node.right);

        // The diameter at the current node is the sum of the left and right heights.
        maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);

        // Return the height of the current subtree
        return Math.max(leftHeight, rightHeight) + 1;
    }

    dfs(root);  // Start DFS traversal.
    return maxDiameter;  // Return the maximum diameter found.
}
