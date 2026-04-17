/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   let profit  = 0
   let buy= prices[0]
   for(let sell of prices){
      if(sell<buy){
        buy=sell
      }else {
        profit = Math.max(profit,sell-buy)
      }
   }return profit
};