/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    if(nums.length==1)return nums[0]
    let n = nums.length
    for(let i=Math.floor((n-2)/2);i>=0;i--){
        heapify(nums,n,i)
    }

    for(let i=n-1;i>n-k;i--){
        [nums[0],nums[i]] = [nums[i],nums[0]]

        heapify(nums,i,0)
        
    }return nums[0]
};


function heapify(nums,n,i){
   let length = n
   let largest = i

   while(true){
    let left = (i*2)+1
    let right = (i*2)+2

    if(length>left && nums[left]>nums[largest]){
       largest = left
    }
    if(length>right && nums[right]>nums[largest]){
        largest = right
    }
    if(largest==i) break
    [nums[i],nums[largest]] = [nums[largest],nums[i]]
    i = largest
   }
}