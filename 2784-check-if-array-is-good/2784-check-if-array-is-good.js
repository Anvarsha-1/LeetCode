/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
   let max = Math.max(...nums) 
   let hash = {}
   for(let val of nums){
    hash[val] = (hash[val]||0)+1
   }
   if(max>Object.keys(hash).length)return false
   for(let key in hash){
    if(hash[key]>1 && key!=max){
        return false
    }
   }
   return nums.length===max+1
};