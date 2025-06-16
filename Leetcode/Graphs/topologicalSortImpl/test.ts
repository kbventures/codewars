// A topological sort gives a linear ordering of task (nodes) in a directed acyclic graph(DAG)
// (e.g., A -> B) A comes before B in the order-useful for resolving dependencies.

// Khan's Algorithm

// Step 0: Create a DAG

type Graph = Map<string, string[]>; 

const graph: Graph = new Map<string, string[]>([
    ['A', ['C']],
    ['B', ['C','D']],
    ['C', ['E']],
    ['D', ['E','F']],
    ['E', ['G','F']],
    ['F', ['H','I']],
    ['G', []],
    ['H', []],
    ['I', []],
]);


function findInDegree(graph: Graph): Map<string,number>{

    const inDegree = new Map<string, number>();

    // initialize in degree map
    for(let node of graph.keys()){
        inDegree.set(node, 0); 
    }

    for(let node of graph.keys()){
        for(let neighbor of graph.get(node)!){
            
        }
    }
return inDegree; 
}