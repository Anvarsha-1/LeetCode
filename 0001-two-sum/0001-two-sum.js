/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        let secondNum = target - nums[i]
        if (obj[secondNum] !== undefined) {
            return [obj[secondNum], i]
        } else {
            obj[nums[i]] = i
        }
    } console.log(obj)
};