/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 * 
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 * 
 */

// BFS Version (Iterative)

// Function to clone a graph using BFS (iterative).
// Returns a cloned copy of the given graph node or null if input is null.
function cloneGraph(originalNode: Node | null): Node | null {
    if (originalNode === null) return null; // Handle null input

    const visitedMap = new Map<Node, Node>(); // Track visited nodes
    visitedMap.set(originalNode, new Node(originalNode.val)); // Clone initial node

    const queue: Node[] = [originalNode]; // BFS queue initialized with original node

    while (queue.length > 0) {
        const currentNode = queue.shift(); // Dequeue node

        for (let neighbor of currentNode.neighbors) {
            if (!visitedMap.has(neighbor)) {
                queue.push(neighbor); // Enqueue unvisited neighbor
                visitedMap.set(neighbor, new Node(neighbor.val)); // Clone neighbor
            }
            visitedMap.get(currentNode).neighbors.push(visitedMap.get(neighbor)); // Connect clone
        }
    }

    return visitedMap.get(originalNode); // Return cloned graph root
}
// Pros:

// ✅ Handles large/deep graphs safely (no stack overflow)

// ✅ Explicit queue structure is easy to control

// Cons:

// ❌ Slightly more verbose than recursive version

// Time Complexity: O(N + E) – Each node and edge is visited once
// Space Complexity: O(N) – For the map and queue (worst case)

// 🔁 DFS Version (Recursive)

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

// Let me know if you'd like this formatted as a code comment block or for documentation purposes.