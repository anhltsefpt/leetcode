/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    function max(a, b) {
        if (a > b) {
            return a
        }

        return b
    }

    let result = 0
    let minimumValue = prices[0]
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > minimumValue) {
            result = max(result, prices[i] - minimumValue)
        } else {
            minimumValue = prices[i]
        }
    }
    return result
}
console.log(maxProfit([7,1,5,3,6,4]))