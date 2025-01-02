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
  // Initialize the maximum profit as 0, since the minimum profit we can get is 0
    let maxProfit = 0;
    // Initialize the minimum price to the first price in the array
    let minPrice = prices[0];
    
    for(price of prices){
        maxProfit = Math.max(maxProfit, (price - minPrice))
        minPrice = Math.min(price, minPrice)
    }
    // Return the maximum profit that can be achieved
    return maxProfit;
}
