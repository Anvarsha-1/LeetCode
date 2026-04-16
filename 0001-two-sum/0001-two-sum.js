/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i)
    }

    for (let i = 0; i < nums.length; i++) {
        let secondNumber = target - nums[i]
        if (map.has(secondNumber) && map.get(secondNumber) !== i) {
            return [i, map.get(secondNumber)]
        }
    } return []
};