/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    let max = Math.max(...costs)
    let cntArr = new Array(max+1).fill(0)

    for(let val of costs){
        cntArr[val]++
    }
    
    for(let i=1;i<cntArr.length;i++){
        cntArr[i] = cntArr[i-1] + cntArr[i]
    }
    let n = costs.length
    let ans = new Array(n)
    
    for(let i=n-1;i>=0;i--){
      let v = costs[i]
      ans[cntArr[costs[i]]-1] = v
      cntArr[v]--
    }
   
    let count = 0
    let sum = 0
    for(let i=0;i<ans.length;i++){
         sum+=ans[i]
        if(coins>=sum){
            count++
        }
    }return count
};