const graph = new Map();
graph.set('A', ['C']);
graph.set('B', ['C', 'D']);
graph.set('C', ['E']);
graph.set('D', ['F']);
graph.set('E', ['H', 'F']);
graph.set('F', ['G']);
graph.set('G', []);
graph.set('H', []);

function findInDegree(graph) {
    const inDegree = new Map();
    for (let node of graph.keys()) {
        inDegree.set(node, 0);
    }
    for (let node of graph.keys()) {
        for (let neighbor of graph.get(node)) {
            inDegree.set(neighbor, inDegree.get(neighbor) + 1);
        }
    }
    return inDegree;
}

function topoSort(graph) {
    const res = [];
    const q = [];
    const inDegree = findInDegree(graph);
    for (let node of inDegree.keys()) {
        if (inDegree.get(node) == 0) {
            q.push(node);
        }
    }
    while (q.length > 0) {
        const node = q.shift();
        res.push(node);
        for (let neighbor of graph.get(node)) {
            inDegree.set(neighbor, inDegree.get(neighbor) - 1);
            if (inDegree.get(neighbor) == 0) {
                q.push(neighbor);
            }
        }
    }
    return (graph.size === res.length) ? res : null;
}