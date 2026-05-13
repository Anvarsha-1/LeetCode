/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function(nums) {
   let result = []
   
   for(let i=0;i<nums.length;i++){
    let half = Math.floor(nums[i]/2)
    let or = (half| half+1)
    if(or>nums[i]) {
        result.push(-1)
        continue
    }
    let find =  nums[i] - or
    result.push(half+find) 
   }return result
};