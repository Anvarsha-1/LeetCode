/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let result = []
    nums.sort((a,b)=>a-b)
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i]
        if(1>0 && n==nums[i-1]) continue
        let l = i + 1, r = nums.length - 1
        while (l < r ) {
            let sum = n + nums[l] + nums[r]
            if (sum > 0) {
                r--
            } else if (sum < 0) {
                l++
            } else {
                result.push([n, nums[l], nums[r]])
                l+=1
                while(nums[l]===nums[l-1] && l<r){
                    l++
                }
            }
        }
    } return result

};