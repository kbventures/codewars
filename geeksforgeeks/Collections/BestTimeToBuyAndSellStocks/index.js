// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

// 121. Best Time to Buy and Sell Stock
// Easy
// Topics
// Companies
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
 

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

/**
 * @param {number[]} prices
 * @return {number}
 */

// V1 Brute force
var maxProfit = function(prices) {
    let profit =0; 

    for(let i =0;i<prices.length;i++){
        for(let y = i+1; y<prices.length;y++){
            let temp = prices[y] - prices[i]
            if(temp < 0) continue; 
            if(profit < temp) {
                profit = temp; 
            }
        }
    }
    return profit;   
};

const result = maxProfit([7,1,5,3,6,4])
console.log(result)

// V2 
const maxProfit = (prices) => {
    // Initialize variables to track minimum price and maximum profit
    let minPrice = prices[0]; // Assume the first price as the minimum initial price
    let max = 0; // Initialize maximum profit to 0
  
    // Iterate through prices array starting from the second element
    for (let i = 1; i < prices.length; i++) {
      // Calculate current profit if selling at current price
      let profit = prices[i] - minPrice;
  
      // Update maximum profit if current profit is greater
      if (profit > max) {
        max = profit;
      }
  
      // Update minimum price encountered so far
      if (prices[i] < minPrice) {
        minPrice = prices[i];
      }
    }
  
    // Return the maximum profit found
    return max;
  };
  
