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


// two-pass DFS graph cloning algorithm:
// Time complexity is O(n + m) where n is the number of nodes and m is the number of edges (since each node and edge is visited once).
// Space complexity is O(n + m) due to the recursion stack, the cloned node map (O(n)), and storing neighbors (O(m)).

function cloneGraph(node: _Node | null): _Node | null {
 

 const clonedNodeMap = new Map<number,_Node>()

 // create a map of all the nodes in the graph
 function dfsCrMap(node:_Node, visited = new Set<_Node>()){
 if(!node || visited.has(node)) return
 visited.add(node)
 clonedNodeMap.set(node.val, new _Node(node.val))
 for(let neighbor of node.neighbors){
 dfsCrMap(neighbor, visited)
        }
    }

 function dfsConnectNeighbors(node:_Node, visited = new Set<_Node>()){
 if(!node || visited.has(node)) return
 visited.add(node)

 for(let neighbor of node.neighbors){
 const tempNeighbor = clonedNodeMap.get(neighbor.val)
 clonedNodeMap.get(node.val).neighbors.push(tempNeighbor)    
 dfsConnectNeighbors(neighbor, visited)
        }
    }

 dfsCrMap(node)
 dfsConnectNeighbors(node)


 return clonedNodeMap.get(1)
};

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

// Iterative BFS

// Time Complexity: O(n + m) — Each of the n nodes and m edges is processed exactly once.

// Space Complexity: O(n + m) —

// O(n) for visitedMap,

// O(n) for the queue in worst case (all nodes),

// O(m) for storing neighbors in the cloned graph.

// Function to clone a graph. Returns a cloned copy of the given graph node or null if the input node is null.

function cloneGraph(originalNode: _Node | null): _Node | null {
 if (originalNode === null) return null;

 const visitedMap = new Map<_Node, _Node>();
 visitedMap.set(originalNode, new _Node(originalNode.val));

 const queue: _Node[] = [originalNode];

 while (queue.length > 0) {
 const currentNode = queue.shift();
 if (!currentNode) continue;  // Narrow type here

 const clonedCurrentNode = visitedMap.get(currentNode);
 if (!clonedCurrentNode) continue;  // Narrow type here

 for (const neighbor of currentNode.neighbors) {
 if (!visitedMap.has(neighbor)) {
 queue.push(neighbor);
 visitedMap.set(neighbor, new _Node(neighbor.val));
      }

 const clonedNeighbor = visitedMap.get(neighbor);
 if (clonedNeighbor) {
 clonedCurrentNode.neighbors.push(clonedNeighbor);
      }
    }
  }

 return visitedMap.get(originalNode) ?? null;
}
// Pros:

// ✅ Handles large/deep graphs safely (no stack overflow)

// ✅ Explicit queue structure is easy to control

// Cons:

// ❌ Slightly more verbose than recursive version

// Time Complexity: O(N + E) – Each node and edge is visited once
// Space Complexity: O(N) – For the map and queue (worst case)


// 🔁 DFS Version (Recursive) single pass

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




// Summary:

// Approach	Time	 Space	Pros	Cons
// Single-pass DFS	 O(n + m)	  O(n + m)	    Simple, elegant code	  Stack overflow risk
// Iterative BFS	 O(n + m)	  O(n + m)	    Stack safe, explicit control	  More verbose
// Two-pass DFS	 O(n + m)	  O(n + m)	    Clear separation of concerns	  Redundant, complex
