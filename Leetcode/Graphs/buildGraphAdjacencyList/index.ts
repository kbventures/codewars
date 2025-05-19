function buildGraph(adjList: number[][]): Node | null {
    if (adjList.length === 0) return null;

    const nodes = new Map<number, Node>();

    // First, create all the nodes
    for (let i = 0; i < adjList.length; i++) {
        const nodeVal = i + 1;
        nodes.set(nodeVal, new Node(nodeVal));
    }

    // Then, connect neighbors
    for (let i = 0; i < adjList.length; i++) {
        const nodeVal = i + 1;
        const node = nodes.get(nodeVal);

        for (let neighborVal of adjList[i]) {
            node.neighbors.push(nodes.get(neighborVal));
        }
    }

    // Return the first node (usually node 1)
    return nodes.get(1);
}



const input = [
  [2, 4],
  [1, 3],
  [2, 4],
  [1, 3]
];

const clonedStartNode = buildGraph(input);