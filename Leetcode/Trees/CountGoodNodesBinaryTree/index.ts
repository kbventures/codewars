
// Time: O(n) — visit every node once
// Space: O(log n) for balanced tree, O(n) worst (skewed tree)

function goodNodes(root: TreeNode | null): number {
    if (!root) return 0;
    return dfs(root, root.val);
}

function dfs(node: TreeNode | null, maxSoFar: number): number {
    if (!node) return 0;

    const isGood = node.val >= maxSoFar ? 1 : 0;
    const newMax = Math.max(maxSoFar, node.val);

    return isGood + dfs(node.left, newMax) + dfs(node.right, newMax);
}