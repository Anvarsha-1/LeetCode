/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
  let min= Infinity
  let sum;
  for(let i=0;i<nums.length;i++){
    sum=digitSum(nums[i])

    if(sum<min){
        min=sum
    }
  }return min
   
};

function digitSum(n){
    let sum=0
   while(n>0){
    sum+=n%10;
    n=Math.floor(n/10)
   } 
   return sum
}