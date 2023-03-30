/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    function cleanString(s) {
        let newString = s
        newString = newString.toLowerCase()
        let result = ''
        for (let i = 0; i < newString.length; i++) {
            if (((newString[i] >= 'a') && (newString[i] <= 'z')) || ((newString[i] >= '0') && (newString[i] <= '9'))) {
                result = `${result}${newString[i]}`
            }
        }
        return result
    }
    
    function checkPalindrome(s) {
        let i = 0
        while (i < s.length / 2) {
            if (s[i] !== s[s.length - 1 - i]) {
                return false
            }
            i++
        }

        return true
    }

    return checkPalindrome(cleanString(s))
};

console.log(isPalindrome('0P'))