/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 // Brute force
//  var dailyTemperatures = function(temperatures) {
//     const result = temperatures.map((el,idx)=>{
//         for(let i=idx+1;i<temperatures.length;i++){
//             if(temperatures[i] > el){
//                 return i - idx;
//             }
//         }
//         return 0; 
//     })
//     return result; 
// };
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 // Monotonic stack
 // [73,74,75,71,69,72,76,73]
function dailyTemperatures(temperatures) {
    const totalDays = temperatures.length;
    const daysUntilWarmer = new Array(totalDays).fill(0);
    const indexStack = [];
  
    for (let currentIndex = totalDays - 1; currentIndex >= 0; --currentIndex) {
        while (indexStack.length && temperatures[indexStack[indexStack.length - 1]] <= temperatures[currentIndex]) {
            indexStack.pop();
        }
        if (indexStack.length) {
            daysUntilWarmer[currentIndex] = indexStack[indexStack.length - 1] - currentIndex;
        }
        indexStack.push(currentIndex);
    }

    return daysUntilWarmer;
}







