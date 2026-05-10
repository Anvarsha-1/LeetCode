/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
   let sum = nums.reduce((acc,cur)=>acc+cur,0)
   let numXor = 0
    for(let i=0;i<nums.length;i++){
        numXor |= nums[i]
        
    }return numXor*(1<<(nums.length-1))
};