// https://leetcode.com/problems/roman-to-integer/

const converter = (character) => {
    if (character === 'I') {
        return 1
    }

    if (character === 'V') {
        return 5
    }

    if (character === 'X') {
        return 10
    }

    if (character === 'L') return 50
    if (character === 'C') return 100
    if (character === 'D') return 500
    if (character === 'M') return 1000
}
const romanToInt = function(s) {
    let arr = []
    for (let i = 0; i < s.length; i++) {
        arr = [...arr, converter(s[i])]
    }

    let position = 0
    let res = []
    while (position < arr.length) {
        if (position === arr.length - 1) {
            res = [...res, arr[position]]
            position += 1
        } else if (arr[position] < arr[position + 1]) {
            let head = arr[position]
            let current = arr[position + 1]
            res = [...res, current - head]
            position += 2

        } else {
            res = [...res, arr[position]]
            position += 1
        }
    }
    return res.reduce((prev, current) => prev += current)
}

console.log(romanToInt('III'))