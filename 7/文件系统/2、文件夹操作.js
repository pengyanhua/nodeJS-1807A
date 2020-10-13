const fs = require("fs");
// 1、创建文件夹
// dirname 文件夹名称
// fs.mkdirSync(dirname)
// fs.mkdir(dirname,callback)


// 2、删除文件夹(非空文件夹 )
// fs.rmdirSync(dirname)
// fs.rmdir(dirname，callback)


// 3、读取文件的目录
// let arr = fs.readdirSync("build");
// console.log(arr)


// 4.判断是文件还是文件夹
// fs.statSync(pathname) 返回一个对象  该对象包含此目录的信息
// 对象上有两个方法
//    对象.size 返回文件大小
//   方法一 对象.isFile()  是文件返回true
//   方法二 对象.isDirectory() 是文件夹返回true
// let desc = fs.statSync("index.js")
// console.log(desc.size)
// console.log(desc.isDirectory())


// 5、判断一个文件是否存在
// 此方法没有异步方法（异步淘汰了）
// let flag =  fs.existsSync("index.js")
// console.log(flag)




// 需求 删除 build 