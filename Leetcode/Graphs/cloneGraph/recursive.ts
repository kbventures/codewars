.// 🔁 DFS Version (Recursive)

// Function to clone a graph using DFS (recursive).
function cloneGraph(node: Node | null): Node | null {
    if (node === null) return null;

    const visited = new Map<Node, Node>(); // Track visited nodes

    function dfs(current: Node): Node {
        if (visited.has(current)) return visited.get(current); // Avoid reprocessing

        const clone = new Node(current.val); // Clone current node
        visited.set(current, clone); // Mark as visited

        for (let neighbor of current.neighbors) {
            clone.neighbors.push(dfs(neighbor)); // Recursively clone neighbors
        }

        return clone; // Return cloned node
    }

    return dfs(node); // Start DFS from input node
}
// Pros:

// ✅ Concise and easier to read

// ✅ Natural recursive structure for DFS

// Cons:

// ❌ Risk of stack overflow on deep or cyclic graphs

// ❌ Less explicit control over traversal flow

// Time Complexity: O(N + E) – Each node and edge is visited once
// Space Complexity: O(N) – For the map and recursion stack (up to N deep)

// 📝 Summary Table:
// Feature	BFS (Iterative)	DFS (Recursive)
// Traversal Style	Breadth-First	Depth-First
// Code Length	Slightly longer (queue handling)	Shorter and cleaner
// Stack Safety	✅ Safe for deep graphs	❌ Risk of stack overflow
// Readability	Clear but verbose	Concise and elegant
// Space Complexity	O(N)	O(N)
// Time Complexity	O(N + E)	O(N + E)

// Let me know if you'd like this formatted as a code comment block or for documentation purposes