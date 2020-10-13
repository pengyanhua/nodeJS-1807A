const fn = (arr) => {
    return [...new Set(arr)]
}

const fn1 = (arr) => {
    return arr.filter((item, index) => {
        return index === arr.indexOf(item)
    })
}

console.log(fn([1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, ]))
console.log(fn1([1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, ]))