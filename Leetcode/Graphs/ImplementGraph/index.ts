// Undirected cyclic graph implementation:

class _Node {
    val: number;
    neighbors: _Node[]

    constructor(val?:number, neighbors?: _Node[]){
        this.val = ( val === undefined ? 0 : val)
        this.neighbors = ( neighbors === undefined ? [] : neighbors)
    }
}


const node1 = new _Node(1);
const node2 = new _Node(2);
const node3 = new _Node(3);
const node4 = new _Node(4);

node1.neighbors.push(node2, node4);
node2.neighbors.push(node1,node3);
node3.neighbors.push(node2, node4);
node4.neighbors.push(node1, node3);

console.log(node1);

// used to traverse graph
function dfs(originalNode: _Node, visited = new Set<_Node>()): void{
    if(visited.has(originalNode)) return
    console.log("Visiting: ", originalNode)
    visited.add(originalNode)
    for( let neighbor of originalNode.neighbors){
        dfs(neighbor, visited)
    }
}


dfs(node1)
