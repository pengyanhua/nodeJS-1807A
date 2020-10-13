Array.prototype.myFilter = function (fn) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        fn(this[i], i) && newArr.push(this[i])
    }
    return newArr;
}

let arr = [1, 2, 3];

let res = arr.myFilter(function (item) {
    return item !== 2
})

console.log(res)