/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
   let MaxValue = 0
   for(let i=0;i<nums.length;i++){
    if(nums[i]>MaxValue){
        MaxValue = nums[i]
    }
   }
   let result = 0 
   for(let i=0;i<nums.length;i++){
        result+=(MaxValue-nums[i])
   }return result
};