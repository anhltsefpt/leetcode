// https://leetcode.com/problems/median-of-two-sorted-arrays/
var findMedianSortedArrays = function(nums1, nums2) {
    const totalLength = nums1.length + nums2.length
    if (totalLength === 2) {
        const merge = [...nums1, ...nums2]
        return (merge[0] + merge[1]) / 2
    }
    let pos1 = 0
    let pos2 = 0
    let stacks = []
    while ((pos1 < nums1.length) || (pos2 < nums2.length)) {
        if (pos1 === nums1.length) {
            stacks.push(nums2[pos2])
            pos2 += 1
        } else if (pos2 === nums2.length) {
            stacks.push(nums1[pos1])
            pos1 += 1
        } else if (nums1[pos1] < nums2[pos2]) {
            if (pos1 < nums1.length) {
                stacks.push(nums1[pos1])
                pos1 += 1
            }
        } else {
            if (pos2 < nums2.length) {
                stacks.push(nums2[pos2])
                pos2 += 1
            }
        }
        console.log({
            stacks,
            pos1,
            pos2
        })
        if (totalLength % 2 === 1) {
            if (pos1 + pos2 === Math.floor(totalLength / 2) + 1) {
                return stacks[stacks.length - 1]
            }
        } else {
            if (pos1 + pos2 === totalLength / 2 + 1) {
                return (stacks[stacks.length - 1] + stacks[stacks.length - 2]) / 2
            }
        }
    }    
}

console.log(findMedianSortedArrays([2, 2], [2,2]))