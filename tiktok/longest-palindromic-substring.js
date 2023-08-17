// https://leetcode.com/problems/longest-palindromic-substring/?envType=list&envId=ri3wwttg
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let result = ''
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            const substring = s.substring(i, j + 1)
            if (substring.length > result.length) { // can be a candidate with higher length
                if (checkIsPalindromic(substring)) {
                    result = substring
                }
            }
        }
    }

    return result
}

// O(n^3)
function checkIsPalindromic (s) {
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            return false
        }
    }

    return true
}

console.log(longestPalindrome('c'))