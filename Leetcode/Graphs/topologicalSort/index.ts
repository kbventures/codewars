type Graph = Map<string, string[]>;

const graph: Graph = new Map<string, string[]>();
graph.set('A', ['C']);
graph.set('B', ['C', 'D']);
graph.set('C', ['E']);
graph.set('D', ['F']);
graph.set('E', ['H', 'F']);
graph.set('F', ['G']);
graph.set('G', []);
graph.set('H', []);

// Step 1: Compute the in-degree of each node
function findInDegree(graph: Graph): Map<string, number> {
  const inDegree = new Map<string, number>();

  // Initialize all nodes with in-degree 0
  for (let node of graph.keys()) {
    inDegree.set(node, 0);
  }

  // Count incoming edges for each node
  for (let node of graph.keys()) {
    for (let neighbor of graph.get(node)!) {
      inDegree.set(neighbor, (inDegree.get(neighbor) ?? 0) + 1);
    }
  }

  return inDegree;
}

// Step 2: Perform topological sort
function topoSort(graph: Graph): string[] | null {
  const res: string[] = []; // Stores the final topological order
  const q: string[] = [];   // Queue for processing nodes with in-degree 0
  const inDegree = findInDegree(graph);

  // Step 3: Add all nodes with in-degree 0 to the queue
  for (let node of inDegree.keys()) {
    if (inDegree.get(node) === 0) {
      q.push(node);
    }
  }

  // Step 4: Process the queue
  while (q.length > 0) {
    const node = q.shift()!;  // Dequeue a node
    res.push(node);           // Add it to the result

    // Decrease in-degree of each neighbor
    for (let neighbor of graph.get(node)!) {
      inDegree.set(neighbor, inDegree.get(neighbor)! - 1);

      // If in-degree becomes 0, add to queue
      if (inDegree.get(neighbor) === 0) {
        q.push(neighbor);
      }
    }
  }

  // Step 5: If all nodes are processed, return result; otherwise, a cycle exists
  return (graph.size === res.length) ? res : null;
}

// Example usage:
console.log(topoSort(graph));
