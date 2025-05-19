class Node {
    val: number;
    neighbors: Node[];

    constructor(val?: number, neighbors?: Node[]) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    }
}
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.neighbors.push(node2, node4);
node2.neighbors.push(node1, node3);
node3.neighbors.push(node2, node4);
node4.neighbors.push(node1, node3);


function dfs(node: Node, visited = new Set<Node>()) {
    if (!node || visited.has(node)) return;
    console.log(`Visiting node ${node.val}`);
    visited.add(node);
    for (let neighbor of node.neighbors) {
        dfs(neighbor, visited);
    }
}

dfs(node1);
