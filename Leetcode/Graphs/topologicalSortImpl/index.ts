// Kahn's algorithm is used to perform topological sorting on a Directed Acyclic Graph (DAG), especially when you need to:

// Schedule tasks based on dependencies (e.g. course scheduling)

// Determine a valid build order in compilers or CI pipelines

// Resolve package/module dependencies

// Detect cycles (if sorting fails before all nodes are visited)

// It’s ideal when you want a BFS-based, level-order dependency resolution.


// A topological sort gives a linear ordering of tasks (nodes) in a directed acyclic graph (DAG) such that for every arrow from one node to another 
// (e.g., A → B), A comes before B in the order—useful for resolving dependencies.

// Kahn's Algorithm

// Step 0: Create a DAG
// type Graph = Map<string, string[]>;

// const graph: Graph = new Map<string, string[]>([
//   ['A', ['C']],  // A → C
//   ['B', ['C', 'D']], // B → C, B → D
//   ['C', ['E']],  // C → E
//   ['D', ['F']],  // D → F
//   ['E', ['H', 'F']], // E → H, E → F
//   ['F', ['G']],  // F → G
//   ['G', []],     // G has no outgoing edges
//   ['H', []]      // H has no outgoing edges
// ]);

// // Compute the in-degree of each node
// function findInDegree(graph: Graph): Map<string, number> {
//   // Initialize the hasmap to store the in-degrees
//   const inDegree = new Map<string, number>();

//   // Initialize all nodes with in-degree 0
//   for (let node of graph.keys()) {
//     inDegree.set(node, 0);
//   }

//   // Count incoming edges for each node
//   for (let node of graph.keys()) {
//     // console.log(node)
//     for (let neighbor of graph.get(node)!) {
//         console.log(node, neighbor)
//       inDegree.set(neighbor, (inDegree.get(neighbor) ?? 0) + 1);
//     //   console.log(inDegree)
//     }
//   }

//   return inDegree;
// }

// // Step 2: Perform topological sort
// function topoSort(graph: Graph): string[] | null {
//   const res: string[] = []; // Stores the final topological order
//   const q: string[] = [];   // Queue for processing nodes with in-degree 0
//   const inDegree = findInDegree(graph);

//   // Step 3: Add all nodes with in-degree 0 to the queue
//   for (let node of inDegree.keys()) {
//     if (inDegree.get(node) === 0) {
//       q.push(node);
//     }
//   }

//   // Step 4: Process the queue
//   while (q.length > 0) {
//     const node = q.shift()!;  // Dequeue a node
//     res.push(node);           // Add it to the result

//     // Decrease in-degree of each neighbor
//     for (let neighbor of graph.get(node)!) {
//       inDegree.set(neighbor, inDegree.get(neighbor)! - 1);

//       // If in-degree becomes 0, add to queue
//       if (inDegree.get(neighbor) === 0) {
//         q.push(neighbor);
//       }
//     }
//   }

//   // Step 5: If all nodes are processed, return result; otherwise, a cycle exists
//   return (graph.size === res.length) ? res : null;
// }

// // Example usage:
// const res = topoSort(graph);
// // console.log("result",res)
