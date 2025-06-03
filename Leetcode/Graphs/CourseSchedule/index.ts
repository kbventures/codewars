// Space complexity: O(numCourses + prerequisites) for the adjacency list, in-degree array, and queue.
// Time complexity: O(numCourses + prerequisites) since each course and prerequisite edge is processed once.

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    // Create an adjacency list to represent the graph of courses
    const adjacencyList: number[][] = new Array(numCourses).fill(0).map(() => []);
  
    // Array to store the in-degree (number of dependencies) of each course
    const inDegrees: number[] = new Array(numCourses).fill(0);
  
    // Fill the adjacency list and in-degree array based on prerequisites
    for (const [course, prerequisite] of prerequisites) {
        adjacencyList[prerequisite].push(course);
        inDegrees[course]++;
    }

    // Queue for courses with no prerequisites (in-degree of 0)
    const queue: number[] = [];
  
    // Initialize the queue with courses that have no prerequisites
    for (let i = 0; i < numCourses; ++i) {
        if (inDegrees[i] === 0) {
            queue.push(i);
        }
    }

    // Counter for the number of courses with satisfied prerequisites
    let count = 0;

    // Process the queue until it's empty
    while (queue.length) {
        // Remove the first course from the queue
        const currentCourse = queue.shift()!;
      
        // Increment the count of courses that can be taken
        count++;

        // Decrease the in-degree of the adjacent courses and
        // add them to the queue if they have no other prerequisites
        for (const adjacentCourse of adjacencyList[currentCourse]) {
            if (--inDegrees[adjacentCourse] === 0) {
                queue.push(adjacentCourse);
            }
        }
    }

    // Compare the count of courses taken to the total number of courses
    return count === numCourses;
}
