function qs(a) {
    if (a.length < 2) return a
    const pivot = a[a.length - 1]

    let left = []
    let right = []
    let i = 0
    a.forEach((item, index) => {
        if (index !== a.length - 1) {
            if (item < pivot) left = [...left, item]
            if (item >= pivot) right = [...right, item]
        }
    })

    return [...qs(left), pivot, ...qs(right)]
}

const a = [5, 2, 3, 4, 1]
console.log(qs(a))