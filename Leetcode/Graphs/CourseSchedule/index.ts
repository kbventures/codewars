// How: Traverse graph with DFS, use recursion stack to detect cycles.
// Time: $ O(V + E) $.
// Space: $ O(V + E) $.
// Pros: Memory-efficient, simple code.
// Cons: Recursive, stack overflow risk for deep graphs.

// BFS (Kahn’s Algorithm) with Adjacency List

// How: Use in-degree counts, queue nodes with no prerequisites, process until done or cycle detected.
// Time: $ O(V + E) $.
// Space: $ O(V + E) $.
// Pros: Iterative, gives topological order.
// Cons: Needs extra in-degree array.


// DFS/BFS with Adjacency Matrix

// How: Same as DFS/BFS but use matrix for graph.
// Time: $ O(V + E) $, but neighbor listing is $ O(V) $.
// Space: $ O(V^2) $.
// Pros: Fast edge checks ($ O(1) $).
// Cons: High memory for sparse graphs.

// In graph theory:

// $ V $: Number of vertices (nodes) in a graph, e.g., $ V = 100 $ means 100 nodes.
// $ E $: Number of edges (connections between nodes), e.g., $ E = 200 $ means 200 connections.
// In a sparse graph, E << V^2 , so for $ V = 100 $, E might be 200, far less than V^2 = 10,000(the max for a complete directed graph).

// Best for Sparse Graphs: DFS or BFS with adjacency list (lower space than matrix). and there time and space complexity associated with each

// 1. DFS with Adjacency List
function canFinishDFSList(numCourses: number, prerequisites: number[][]): boolean {
    const graph: number[][] = Array.from({ length: numCourses }, () => []);
    for (const [dest, src] of prerequisites) {
        graph[src].push(dest);
    }
    
    const visited: number[] = new Array(numCourses).fill(0); // 0: unvisited, 1: visiting, 2: visited
    function dfs(node: number): boolean {
        if (visited[node] === 1) return false; // Cycle detected
        if (visited[node] === 2) return true;  // Already processed
        visited[node] = 1;
        for (const neighbor of graph[node]) {
            if (!dfs(neighbor)) return false;
        }
        visited[node] = 2;
        return true;
    }
    
    for (let i = 0; i < numCourses; i++) {
        if (visited[i] === 0 && !dfs(i)) return false;
    }
    return true;
}
// Time Complexity: O(V + E), where V is number of courses, E is number of prerequisites.
// Space Complexity: O(V + E) (adjacency list) + O(V) (visited array, recursion stack).
// Pros: Memory-efficient for sparse graphs, simple to implement.
// Cons: Recursive, potential stack overflow for very deep graphs.

// 2. BFS (Kahn’s Algorithm) with Adjacency List
function canFinishBFSList(numCourses: number, prerequisites: number[][]): boolean {
    const graph: number[][] = Array.from({ length: numCourses }, () => []);
    const inDegree: number[] = new Array(numCourses).fill(0);
    
    for (const [dest, src] of prerequisites) {
        graph[src].push(dest);
        inDegree[dest]++;
    }
    
    const queue: number[] = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }
    
    let count = 0;
    while (queue.length) {
        const node = queue.shift()!;
        count++;
        for (const neighbor of graph[node]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) queue.push(neighbor);
        }
    }
    
    return count === numCourses;
}
// Time Complexity: O(V + E).
// Space Complexity: O(V + E) (adjacency list) + O(V) (queue, in-degree array).
// Pros: Iterative, avoids recursion issues, produces topological order.
// Cons: Requires extra in-degree array.

// 3. DFS with Adjacency Matrix
function canFinishDFSMatrix(numCourses: number, prerequisites: number[][]): boolean {
    const graph: number[][] = Array.from({ length: numCourses }, () => new Array(numCourses).fill(0));
    for (const [dest, src] of prerequisites) {
        graph[src][dest] = 1;
    }
    
    const visited: number[] = new Array(numCourses).fill(0); // 0: unvisited, 1: visiting, 2: visited
    function dfs(node: number): boolean {
        if (visited[node] === 1) return false; // Cycle detected
        if (visited[node] === 2) return true;  // Already processed
        visited[node] = 1;
        for (let neighbor = 0; neighbor < numCourses; neighbor++) {
            if (graph[node][neighbor] && !dfs(neighbor)) return false;
        }
        visited[node] = 2;
        return true;
    }
    
    for (let i = 0; i < numCourses; i++) {
        if (visited[i] === 0 && !dfs(i)) return false;
    }
    return true;
}
// Time Complexity: O(V + E), but neighbor listing is O(V) per node.
// Space Complexity: O(V^2) (matrix) + O(V) (visited array, recursion stack).
// Pros: Fast edge checks (O(1)).
// Cons: High memory usage for sparse graphs.

// Notes:
// Best for Sparse Graphs: DFS or BFS with adjacency list, due to lower space complexity (O(V + E)) compared to matrix (O(V^2)).
// Adjacency list solutions are preferred for sparse graphs (where E << V^2), as they’re more memory-efficient.