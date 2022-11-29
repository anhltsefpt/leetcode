// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    for (let index = 0; index < nums.length; index++) {
        const item = nums[index]
        const position = nums.indexOf(target - item, index + 1)
        if (position !== -1) {
            return ([index, position])
        }
    }
}

console.log(twoSum([2,7,11,15], 9))