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

