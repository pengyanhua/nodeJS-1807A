const path = require("path");
const url = require("url");
// path
let p1 = path.join("/123", "321", "34567") // => /123/321/4567
let p2 = path.resolve("123", "321", "34567") // => /123/321/4567
let p3 = path.dirname("/12312/1231/index.html"); // => /12312/1231
let p4 = path.basename("/12312/1231/index.html"); // => index.html  
let p5 = path.extname("/12312/1231/index.html"); // => .html
// console.log(p3, p4, p5)
// url
const str = "https://www.baidu.com/123/321?page=2&id=123"
// 1、获取访问的路径
let pathname = url.parse(str).pathname;
// 2、获取查询参数
let { page,id } = url.parse(str, true).query;
console.log(page,id)
// http