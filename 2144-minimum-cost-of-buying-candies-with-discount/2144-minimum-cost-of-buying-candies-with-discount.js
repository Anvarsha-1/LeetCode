/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
    if(cost.length===1) return cost[0]

    cost.sort((a,b)=>b-a)
    if(cost.length<=3) return cost[0] + cost[1]
    let buyCost = 0
    for(let i=0;i<cost.length;i+=3){
        if(cost[i+1]){
           buyCost+= (cost[i] + cost[i+1])
        }else{
           buyCost+= cost[i]
        }
         
    }
    return buyCost
   
};