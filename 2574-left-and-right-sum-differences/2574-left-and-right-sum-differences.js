/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
   let leftSum = 0;
   let  rightSum = 0;
   let answer = [], l = [], r = [];

   for(let i = 0, j = nums.length - 1; i < nums.length; i++, j--){
    l.push(leftSum)
    leftSum=leftSum+nums[i];
    r.push(rightSum)
    rightSum=rightSum+nums[j];
   }
   r.reverse();
   for(i=0;i<nums.length;i++){
    answer[i] = Math.abs(l[i] - r[i])
   }return answer 
};