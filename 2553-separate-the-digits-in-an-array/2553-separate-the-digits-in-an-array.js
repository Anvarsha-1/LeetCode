/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let result = []
    for(let i=0;i<nums.length;i++){
        let n = nums[i].toString()
        let len = n.length
        let j = 0
        while(len>j){
            result.push(Number(n[j]))
            j++ 
        }
    }return result
};