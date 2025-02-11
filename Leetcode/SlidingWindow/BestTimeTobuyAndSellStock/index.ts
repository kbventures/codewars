function maxProfit(prices: number[]): number {
    let profit = 0
    let price = prices[0]
    for(let i =1; i< prices.length;i++){
        profit = Math.max(profit , (prices[i]-price))
        price = Math.min(price, prices[i])
    }
    return profit; 
};