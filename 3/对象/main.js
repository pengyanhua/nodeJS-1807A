// 对象新增的方法
// 方法1 Object.is(a,b)
// console.log(+0 === -0)
// 检测NaN 返回true
// 检测+0 -0 返回false
// let flag = Object.is(+0, -0)
// console.log(flag)



// 方法2
// Object.assign
// 合并对象  从第二项起逐个向第一项合并
//          浅克隆 只会复制第一层  
// let obj1 = {
//         name: "张三"
//     },
//     obj2 = {
//         age: 18
//     },
//     obj3 = {
//         name: "李四",
//         sex: "男"
//     };
// let arr = [1, 2, 3],
//     arr1 = [3, 4]


// let res = Object.assign(str, str1);
// console.log(res)


// 3、原型方法

// function Fn() {

// }


// Fn.prototype = {
//     constructor: Fn,
//     init() {

//     },
// }

// Fn.prototype.bindEvent = function () {

// }
// let f = new Fn();
// // 设置原型  注意：会覆盖原来的的__proto__
// Object.setPrototypeOf(f, Object.assign(f.__proto__, {
//     render() {

//     }
// }))
// // 获取原型
// console.log(Object.getPrototypeOf(f))


// 遍历方法
let obj = {
    name: "zhangsan",
    age: 18,
    sex: "男"
}
// Object.key 返回对象所有的键名
for (let key of Object.keys(obj)) {
    console.log(key)
}
// Object.values 返回对象所有的键值
for (let val of Object.values(obj)) {
    console.log(val)
}

// Object.entries()  返回二维数组 每一项是一个数组  数组第一项是键名 第二项键值
for (let [key, val] of Object.entries(obj)) {
    console.log(key, val)
}