/**
 * @param {number[]} cost
 * @return {number[]}
 */
var minCosts = function(cost) {
    let minValue ;
    for(let i=0;i<cost.length;i++){
        if(cost[i]<cost[i+1]){
            cost[i+1] = cost[i]
        }
    }return cost
};