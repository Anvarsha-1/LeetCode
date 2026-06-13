/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    
    let length = nums.length
    let maxAverage = -Infinity
    for(let i=0;i<=length-k;i++){
        let sum = 0
        let average = 0
        for(let j=i;j<k+i;j++){
           sum+=nums[j]
        }
        average =  sum/k
        if(average>maxAverage){
            maxAverage =  average
        }
    }return maxAverage
};