const a = [1, 1, 3, 3, 5, 8, 9]

const binarySearch = (array, item) => {
    let left = 0
    let right = array.length - 1
    while (left + 1 < right) {
        const mid = Math.floor((left + right) / 2)
        if (array[mid] < item) {
            left = mid
        } else if (array[mid] > item) {
            right = mid
        } else {
            return mid
        }
    }

    return null
}

console.log(binarySearch(a, 4))