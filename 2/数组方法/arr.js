// 数组的方法  find 和 findIndex
// find 
// 从数组当找符合要求的项   当函数返回值为真的时候，返回该项，并且结束。
//         数组没有符合要求的项，返回undefined
// findIndex 从数组中找符合要求的项    返回值为真的时候，返回该项所在的下标，并且结束。没有找到返回-1
// let arr = [{
//     name: "张三",
//     age: "18"
// }, {
//     name: "李四",
//     age: "22"
// }];



// let res = arr.findIndex(function (item, index) {
//     return item.name === "李四1"
// })

// console.log(res)



// 数组的fill
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr1.fill(1, 3, 8)
// console.log(arr1)
// 实现高维数组转一维数组 （递归）

// let arr2 = [1, [2, [3, [4]]]]
// console.log(arr2.flat(Infinity))


let arr = [{
    age: 18,
}, {
    age: 19
}];
// p 代表初始值
// n 代表每一项
// i 代表下标
let res = arr.reduce((p, n, i) => {
    return p + n.age
}, 0)

console.log(res)