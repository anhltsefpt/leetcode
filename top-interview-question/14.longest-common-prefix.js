// https://leetcode.com/problems/longest-common-prefix/

const isValid = (strs, length) => {
    const sub = strs[0].substring(0, length)
    for (let i = 1; i < strs.length; i++) {
        const temp = strs[i].substring(0, length)
        if (sub !== temp) {
            return false
        }
    }

    return true
}

const longestCommonPrefix = function(strs) {
    let left = 0
    let right = 200
    let result = 0
    while (left + 1 < right) {
        const mid = Math.floor((left + right) / 2)
        if (isValid(strs, mid)) {
            result = mid
            left = mid
        } else {
            right = mid
        }
    }
    if (result === 0) {
        return ''
    }
    
    return strs[0].substring(0, result)
}

const strs = ["dog","racecar","car"]

console.log(longestCommonPrefix(strs))