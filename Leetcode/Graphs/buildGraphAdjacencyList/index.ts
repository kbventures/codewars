// Building a undirected cyclic graph from adjacency list


class _Node {
  val: number;
  neighbors: _Node[];

  constructor(val = 0, neighbors = []){
    this.val = val; 
    this.neighbors = neighbors;
  }
}


function buildGraph(adjList: number[][]): _Node | null {
    if (adjList.length === 0) return null;

    const nodes = new Map<number, _Node>();

    // First, create all the nodes
    for (let i = 0; i < adjList.length; i++) {
        const nodeVal = i + 1;
        nodes.set(nodeVal, new _Node(nodeVal));
    }

    // Then, connect neighbors
    for (let i = 0; i < adjList.length; i++) {
        const nodeVal = i + 1;
        const node = nodes.get(nodeVal) as _Node;

        for (let neighborVal of adjList[i]) {
            node.neighbors.push(nodes.get(neighborVal)!);
        }
    }
    return nodes.get(1) ?? null;
}



const input = [
  [2, 4],
  [1, 3],
  [2, 4],
  [1, 3]
];

const clonedStartNode = buildGraph(input);



// const nodes: _Node[] = [];

// // First, create all the nodes
// for (let i = 0; i < adjList.length; i++) {
//   nodes[i] = new _Node(i + 1);
// }

// // Then, connect neighbors
// for (let i = 0; i < adjList.length; i++) {
//   const node = nodes[i];
//   for (let neighborVal of adjList[i]) {
//     node.neighbors.push(nodes[neighborVal - 1]); // adjust neighborVal to zero-based index
//   }
// }

// // Return the first node (node with val = 1)
// return nodes[0] ?? null;