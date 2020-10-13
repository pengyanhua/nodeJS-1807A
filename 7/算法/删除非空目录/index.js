const fs = require("fs"); //引入核心内置模块fs
const delFolder = (dir) => {
    // 1、判断dir是否存在
    let exit = fs.existsSync(dir)
    // 2、存在就删除
    if (exit) {
        // 3、删除的时候你要考虑 删除的文件夹是否为空
        let arr = fs.readdirSync(dir);
        //  循环遍历子目录
        arr.forEach(item => {
            // 4、删除子目录
            // 注意：这里主要考虑一个问题 路径
            // 要拼接目录
            let pathname = dir + "/" + item
            // 判断是否是文件
            let flag = fs.statSync(pathname).isFile()
            // 是文件
            if (flag) {
                // 删除文件
                fs.unlinkSync(pathname)
            } else {
                delFolder(pathname)
            }
        })
        // 5.删除文件夹
        fs.rmdirSync(dir)
    }
}



delFolder("test");