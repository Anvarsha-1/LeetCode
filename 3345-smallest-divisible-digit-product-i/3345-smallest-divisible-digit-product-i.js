/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function(n, t) {
    let limit = n+10
    
    for(let i=n;i<=limit;i++){
        let currentNum = i
        let product =1
       while(currentNum){
        product*= currentNum%10
        currentNum=Math.floor(currentNum/10)
       }
       if(product%t===0  && i>=product) return i
    }
};