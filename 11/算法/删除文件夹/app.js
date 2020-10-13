// 递归删除文件夹
const fs = require("fs");
const path = require("path");
const delFolder = (pathname) => {
    // 读取文件夹目录
    fs.readdirSync(pathname).forEach(item => {
        // 拼接目录
        let mid = path.join(pathname, item);
        // 是文件 直接删除  不是 递归删除
        fs.statSync(mid).isFile() ? fs.unlinkSync(mid) : delFolder(mid)
    })
    // 删除文件夹  本行代码执行  一定是一个空文件夹
    fs.rmdirSync(pathname)
}

delFolder("build")