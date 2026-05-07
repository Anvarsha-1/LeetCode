/**
 * @param {number[]} cost
 * @return {number[]}
 */
var minCosts = function(cost) {
    let result =[]
    let minValue = Infinity
    for(let i=0;i<cost.length;i++){
        if(cost[i]<minValue){
            minValue = cost[i]
        }
            result[i] = minValue
        
    }return result
};