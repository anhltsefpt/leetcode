/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const temporaryArray = nums.sort((a, b) => a - b)
    let i = 1
    while (i < temporaryArray.length) {
        if (temporaryArray[i] === temporaryArray[i - 1]) {
            return true
        }
        i++
    }
    return false
};

console.log(containsDuplicate([2,14,18,22,22]))