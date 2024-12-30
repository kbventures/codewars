// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */

// Brute force time O(n^2) space O(1)
// var maxProfit = function(prices) {
// let profit =0; 
// for(let i =0; i<prices.length;i++){
//     for(let y=prices.length-1; y > i;y--){
//         if(prices[i]< prices[y]){
//             let tempProfit = prices[y] - prices[i]
//             if(profit < tempProfit){
//                 profit = tempProfit
//                 }
//         }
//     }
// }
//     return profit; 
// };

// O(n) ???
var maxProfit = function(prices) {
    let profit =0; 
    let i =0; 
    let y = prices.length-1;
    
    
    // You need ot keep track of the lowest price
    while(i<y){
        if(prices[i]<prices[y]){
            let tempProfit = prices[y]-prices[i]
            if(tempProfit > profit){
                profit = tempProfit
            }
            y--
        } else{
            i++
        }
    }
        return profit; 
    };