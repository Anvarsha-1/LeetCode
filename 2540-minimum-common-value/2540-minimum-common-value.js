/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
    let result = -1
    for (let i=nums2.length-1;i>=0;i--) {
      let values = searchValue(nums2[i],nums1)
      result =  values ? values : result
    }return result
};

function searchValue(val,nums1) {
    let left = 0
    let right = nums1.length - 1
    while (left <= right) {
        let middle = Math.floor((left + right)/2)
        if (nums1[middle] === val) return val
        if(nums1[middle]>val){
            right = middle-1
        }else{
            left = middle+1
        }
    }
}