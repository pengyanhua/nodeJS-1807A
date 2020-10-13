function sort(arr) {
    return arr.sort(function (a, b) {
        return b - a
    })
}

console.log(sort([1, 2, 5, 7, 9, 6, 5, 4, 2]))