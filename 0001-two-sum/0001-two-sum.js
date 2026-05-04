/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let  hash = {}

    for(let i=0;i<nums.length;i++){
        let secondNum = target - nums[i]
        if(hash[secondNum]>-1){
            return [i,hash[secondNum]]
        }else{
            hash[nums[i]] =  i
        }
    }
    
};