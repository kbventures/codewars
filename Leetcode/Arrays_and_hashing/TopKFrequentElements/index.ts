// function topKFrequent(nums: number[], k: number): number[] {
//     const hashMap: Record<string, number> = {}

//     for(let n of nums){
//         hashMap[n]? hashMap[n]++ : hashMap[n] = 1; 
//     }

//     let temp = Object.entries(hashMap)

//     let tempSorted = temp.sort(
//         (a,b)=>{
//         return b[1]-a[1]
//     })

//     let result = []
//     for(let x =0; x < k;x++){
//         let curr = Number(tempSorted[x][0])
//         result.push(curr)
//     }
//     return result
// };


function topKFrequent(nums: number[], k: number): number[] {
    // Step 1: Build the frequency hash map
    const hashMap: Record<number, number> = {};
    for (let n of nums) {
        hashMap[n] = (hashMap[n] || 0) + 1;
    }

    // Step 2: Use a min-heap to store the top k frequent elements
    const minHeap: [number, number][] = [];
    for (let [num, freq] of Object.entries(hashMap)) {
        const n = Number(num);
        minHeap.push([n, freq]);
    }

    // Step 3: Sort the heap based on frequency (ascending order)
    minHeap.sort((a, b) => a[1] - b[1]);

    // Step 4: Extract the top k frequent elements
    const result: number[] = [];
    for (let i = 0; i < k; i++) {
        result.push(minHeap.pop()![0]);
    }

    return result;
};