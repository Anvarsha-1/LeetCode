/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function (nums, target) {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        let curtarget = 0
        let curNontarget = 0
        for (let j = i; j < nums.length; j++) {
            if (nums[j] === target) {
                curtarget++
            } else {
                curNontarget++
            }

            if (curtarget > curNontarget) {
                count++
            }
        }
    } return count
};



