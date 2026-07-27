/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
let largest  = -Infinity
let secondLar = -Infinity
for(let i=0;i<nums.length;i++){
    if(nums[i]>largest){
        secondLar = largest
        largest = nums[i]
    }else if(nums[i]>secondLar){
        secondLar = nums[i]
    }
}
 return (largest-1)*(secondLar-1)
};