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
 var dailyTemperatures = function(temperatures) {
let stack = []
let result = []

for(let i =0; i<temperatures.length;i++){
   if(stack.length==0){
    stack.push([temperatures[i],i])
   } else if(stack[stack.length-1] < temperatures[i]) {
    //  Empty stack and update positions relative to higher tempeatures in result array
    while(){
        
    }
   } else {

   }
}
return result; 
};






