// Build an undirected graph from an adjacency list

class _Node {
  val: number;
  neighbors: _Node[];

  constructor(val = 0, neighbors: _Node[] = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

function buildGraph(adjList: number[][]): _Node | null {
  if (adjList.length === 0) return null;

  const nodes = new Map<number, _Node>();

  // Create all nodes
  for (let i = 0; i < adjList.length; i++) {
    const nodeVal = i + 1;
    nodes.set(nodeVal, new _Node(nodeVal));
  }

  // Connect neighbors bidirectionally
  for (let i = 0; i < adjList.length; i++) {
    const nodeVal = i + 1;
    const node = nodes.get(nodeVal)!;

    for (let neighborVal of adjList[i]) {
      const neighbor = nodes.get(neighborVal)!;

      // Add each connection if not already added
      if (!node.neighbors.includes(neighbor)) {
        node.neighbors.push(neighbor);
      }

      if (!neighbor.neighbors.includes(node)) {
        neighbor.neighbors.push(node);
      }
    }
  }

  return nodes.get(1) ?? null;
}

// Example input for an undirected graph
const input = [
  [2, 4], // Node 1 connected to 2 and 4
  [1, 3], // Node 2 connected to 1 and 3
  [2, 4], // Node 3 connected to 2 and 4
  [1, 3], // Node 4 connected to 1 and 3
];

const clonedStartNode = buildGraph(input);
