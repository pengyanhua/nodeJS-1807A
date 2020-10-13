// 对象

// 1.对象的简介语法
// 当对象的键值对  键名和键值保持一致的时候 可以使用
// const add = (a, b) => a + b;
// const sub = (a, b) => a - b
// module.exports = {
//     add,
//     sub,
// }

// let name = "张三",
//     age = "18";

// let obj = {
//     name: name,
//     age: age,
// }

// console.log(obj)


// // 2、对象的属性名表达式
// let a = "na",
//     b = "me";
// let obj = {
//     // 对象的属性名表达式
//     [1 + 2]: "张三"
// }
// console.log(obj)


// 3、属性的可枚举性和遍历

// let obj = {
//     name: "张三",
   
// }

// for(let key in obj){
//     console.log(key)
// }



// let desc = Object.getOwnPropertyDescriptor(obj, "name")
// console.log(desc)