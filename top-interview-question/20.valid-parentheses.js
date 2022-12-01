// https://leetcode.com/problems/valid-parentheses/
const isClose = (s1, s2) => {
    return ((s1 === '(') && (s2 === ')')) || ((s1 === '[') && (s2 === ']')) || ((s1 === '{') && (s2 === '}'))
}
const isValid = function(s) {
    const stacks = []
    for (let i = 0; i < s.length; i++) {
        const character = s[i]
        if ((character === '(') || (character === '[') || (character === '{')) {
            stacks.push(character)
        } else if ((character === ')') || (character === ']') || (character === '}')) {
            let previous = stacks.pop()
            if (!isClose(previous, character)) {
                return false
            }
        }
    }
    if (stacks.length > 0) return false

    return true
}

console.log(isValid('()[]{}'))