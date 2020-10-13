// 箭头函数
// 形式上  看起更加简洁一点 省略了 function
// 语法层面：
//  1、 如果形参个数数量为1个的时候 可以缺略小括号
//  2、 如果代码块只有一行的时候 可以省略花括号  此行代码返回值最为函数返回值
//  3、 箭头会保留外部this指向，也就是说箭头函数内部this指向只和定义时有关系。
//  4、 箭头函数不可以作为构造函数，不能通过new 调用
//  5、 箭头函数内部没有arguments

// 函数柯力化
// const add = a => b => c => d => e => a + b + c + d + e;
// const add = (a) => {
//     return (b) => {
//         return (c) => {
//             return (d) => {
//                 return (e) => {
//                     return a + b + c + d + e
//                 }
//             }
//         }
//     }
// };

// console.log(add(1)(2)(3)(4)(5))
// 传统this指向问题
// 1、当函数没有人调用的时候，默认指向window || global
// 2、当函数被调用你的时候，谁调用此函数，this指向谁
function fn() {
    console.log(this)
}

fn();