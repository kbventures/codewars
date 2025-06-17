function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    
    // Will contain topological ordered courses 
    const result: number[] = []
    const adjacencyList = new Array(numCourses).fill(0).map(() => [] )
    const inDegrees = new Array(numCourses).fill(0)

    for( const [ course, prereq ] of prerequisites){
        // this course is a prereq to this list of coures
        adjacencyList[prereq].push(course)
        // Number of prereq this course has
        inDegrees[course]++
    }

    // Initialize queue
    const queue: number[] = []

    for( const iD in inDegrees){
        if(inDegrees[Number(iD)] == 0) {
            queue.push(Number(iD))
        }
    }

    // Iteratively BFS the graph
    while(queue.length > 0){

        const currVertice = queue.shift()
        result.push(currVertice)

        for( const cV of  adjacencyList[currVertice]){
            inDegrees[cV]--
            if(inDegrees[cV] == 0){
                queue.push(cV)
            }
        }
    }

    return result.length == numCourses ? result : [];
};