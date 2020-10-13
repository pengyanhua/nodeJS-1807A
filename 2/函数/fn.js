// 函数默认值
// 在函数形参声明的时候,直接  形参 = 值

// function fn(a = 2) {
//     console.log(a)
// }
// fn()

// 解构赋值 实现默认值
// function foo({x, y = 5} = {}) {
//     console.log(x, y);
//   }

//   foo({}) // undefined 5
//   foo({x: 1}) // 1 5
//   foo({x: 1, y: 2}) // 1 2
//   foo() // TypeError: Cannot read property 'x' of undefined


// 函数的length  返回形参的个数
// function fn(a, b, c, d, e) {
// }

// console.log(fn.length)


// rest 运算符
// function fn(a, ...arr) {
//     console.log(a,arr)
// }

// fn(1, 2, 3, 4, 5)

// console.log(fn.name)

