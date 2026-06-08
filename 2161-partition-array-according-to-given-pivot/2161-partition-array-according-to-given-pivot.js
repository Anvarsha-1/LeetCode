/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    let less = []
    let middle = []
    let greater = []
    for(let i=0;i<nums.length;i++){
        if(nums[i]<pivot){
            less.push(nums[i])
        }else if(nums[i]>pivot){
            greater.push(nums[i])
        }else{
            middle.push(nums[i])
        }
    }return less.concat(middle).concat(greater)
  
};