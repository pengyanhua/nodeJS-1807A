// let arr = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 5];
// let s1 = new Set(arr);


// // Set添加数据
// // 添加重复无效
// s1.add(2)
// // Set删除数据
// s1.delete(2)
// // Set是否存在一个值
// let flag = s1.has(2)
// console.log(flag)
// console.log(s1)
// console.log(s1.size)


// let arr = [1, 2, 3, 4],
//     arr1 = [3, 4, 5, 6];

// let s1 = new Set(arr),
//     s2 = new Set(arr1);

// let res = [...s2].filter(item => {
//     return s1.has(item)
// })
// console.log(res)

// Map 数据解构


let arr = [
    ["name", "张三"],
    ["age", "18"]
];

let m1 = new Map(arr);

m1.set("sex", "男")

console.log(m1)