// 数组降为

// let arr = [1, [2, [3, [4, [5, [6, 7, 8, [9]]]]]]];

// function flat(arr) {
//     // Array.isArray(n) 检测是不是一个数组
//     // 注意递归出口 你要什么自己不调用自己
//     return arr.reduce((p, n) => Array.isArray(n) ? p.concat(flat(n)) : p.concat(n), [])
// }

// let res = flat(arr)
// console.log(res)

// 不允许使用循环语法  向数组推入1 - 100 数字

var arr = [],
    num = 1;

function fn() {
    if (num <= 100) {
        arr.push(num);
        num++;
        fn();
    }
}
fn();
console.log(arr)