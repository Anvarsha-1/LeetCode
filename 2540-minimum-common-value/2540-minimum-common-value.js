/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
    // let result = -1
    // for (let i=nums2.length-1;i>=0;i--) {
    //   let values = searchValue(nums2[i],nums1)
    //   result =  values ? values : result
    // }return result
   // -------------------------------------------
//    let set = new Set(nums1)
//    for(let val of nums2){
//     if(set.has(val)){
//         return val
//     }
//    }return -1

    //------------------------------------------

    let i = 0
    let j = 0
    while(i<nums1.length && j< nums2.length){
        if(nums1[i]===nums2[j])return nums1[i]
        console.log(nums1[i],nums2[j])
        if(nums1[i]<nums2[j]){
            i++
        }else if(nums2[j]<nums1[i]){
            j++
        }
    }return -1
};

// function searchValue(val,nums1) {
//     let left = 0
//     let right = nums1.length - 1
//     while (left <= right) {
//         let middle = Math.floor((left + right)/2)
//         if (nums1[middle] === val) return val
//         if(nums1[middle]>val){
//             right = middle-1
//         }else{
//             left = middle+1
//         }
//     }
// }