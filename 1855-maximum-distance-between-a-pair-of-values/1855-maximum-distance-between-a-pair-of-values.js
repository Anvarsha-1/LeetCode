/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function(nums1, nums2) {
   
    let max = 0
    let len = nums1.length
    let len2 = nums2.length
    let j = 0
    let i = 0
    while(i<len && j<len2){
        if(nums1[i]>nums2[j]){
            i++
        }else{
            max = Math.max(max,j-i)
            j++
        }
    }return max
    
};