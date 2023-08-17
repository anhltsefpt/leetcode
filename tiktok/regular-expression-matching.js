// https://leetcode.com/problems/regular-expression-matching/?envType=list&envId=ri3wwttg

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// d[i,j] = 1 if s[0 ..i] match p[j]
var isMatch = function(s, p) {
    
}

function isValid (s, p) {
    if (s.length === 1 && p === '.') {
        return true
    }
    if (p === '*') {
        return true
    }

    if (s === p) {
        return true
    }
}

// '.' Matches any single character.​​​​
// '*' Matches zero or more of the preceding element.