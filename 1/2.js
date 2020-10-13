// ·ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构

// 数组解构赋值 就是一一对应原则
// 扩展运算符...
// 1、在解构中 扩展运算符匹配剩余未匹配的项
// 2、在解构中 扩展运算符必须放在最后
// let [a, c,...b] = [1, 2, 3, 4, 5];

// console.log(a, b, c)


// 对象解构赋值 就是一一对应原则

// let { age,...a }  = { age:18,name:"张三",sex:"男" }
// console.log(age,a)


// 复合解构
// let p1 = {
//     name: "张三",
//     like: ["篮球", "足球"],
//     age: 18,
//     pro: {
//         sex: "男",
//         height: 180
//     }
// }
// let {
//     name,
//     age,
//     like: [a, b],
//     pro: {
//         sex,
//         height
//     }
// } = p1;

// console.log(name, age, a, b, sex, height)

// let str = "12345";

// let [a,...b] = str;
// console.log(a,b)


// let {
//     name,
//     age = 18
// } = {
//     name: "张三",
//     age: 20
// }

// console.log(name, age)


// function fn({name,age} = {}) {
//     console.log(name, age)
// }

// fn()


// console.log(global)
// // this指向当前模块
// console.log(this)