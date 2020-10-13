const path = require("path");


// 1、常识路径
const pathname = "/public/dist/src/index.html";
console.log(path.dirname(pathname)) //  /public/dist/src
console.log(path.basename(pathname)) //  index.html 
console.log(path.extname(pathname)) //  .html


// console.log("********************************************8")
// const pathname1 = "/public/dist/src";
// console.log(path.dirname(pathname1)) // /public/dist
// console.log(path.basename(pathname1)) // src
// console.log(path.extname(pathname1)) // ""
// 2.路径操作
// console.log(__dirname)    //返回当前文件所在文件夹目录（不包含文件本身）
// console.log(__filename)   //返回当前文件所有文件目录（加上文件本身）

// 2-1 路径拼接
// 相对拼接
// path.join(路径1，路径2，路径3)  返回所有路径拼接之后的结果
// 举个栗子
// console.log(path.join(__dirname, "1/2/3/4"))

// 2-2绝对拼接
// path.join(路径1，路径2，路径3)  返回所有路径拼接之后的绝对路径
// console.log(path.resolve("1/2/3/4"))

// 3、格式化路径
const pathname = "/public/dist/src/index.html";
// 字符串路径 => 对象格式路径
console.log(path.parse(pathname))
let obj = {
    root: "/",
    dir: "123/1/2/3", //文件夹目录
    base: "index.js", //最后一个路径
    ext: ".js", //扩展名
    name: "index" //名字
}
// 对象格式路径 => 字符串路径 
console.log(path.format(obj))