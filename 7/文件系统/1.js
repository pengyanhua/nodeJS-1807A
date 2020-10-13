// 引入核心内置模块 fs   file system
const fs = require("fs");


// 1.读取文件
// pathname 读取的路径
// encoding 编码格式
// callback 回调函数
// 其中callback 接受两个参数 第一参数是错误信息 第二个参数是获取的数据
// fs.readFileSync(pathname,[encoding])  同步方法
// fs.readFile(pathname,[encoding],callback)  异步方法  

/**
         fs.readFile("1.txt", "utf-8", (error, data) => {
            if (error) {
                console.log("读取失败了");
                return;
            }
            console.log("异步读取的" + data)
        })
        let str = fs.readFileSync("1.txt", "utf-8")
        console.log("同步读取的" + str)
 */

/**
 * @param { String } unlink  
 * 
 * 
 */

//  2、删除文件
// 所有的异步方法必须有个回调函数，并且回调函数会作为异步方法的最后一个参数
// fs.unlink(pathname)
// fs.unlinkSync(pathname)

// 3.修改内容(覆盖)
// pathname  路径 
// 注意：如果修改文件的路径不存在，这个时候回创建文件
// content 修改的内容
// fs.writeFileSync(pathname,content)
// fs.writeFile(pathname,content,callback)




// 需求 ：
// 1、在1.txt文件中追加   哈哈哈
// 分析 先读取内容1.txt
// 写入 读取的内功 + 哈哈哈


let str = fs.readFileSync("1.txt","utf-8");
fs.writeFileSync("1.txt",str+"哈哈哈")


// 4.追加方法
// pathname 路径
// content 追加的内容
// callback 回调函数
// fs.appendFileSync(pathname,content)
// fs.appendFile(pathname,content,callback)
// fs.appendFileSync("1.txt", "123")


// fs.rename(pathname, newname, callback)
// fs.renameSync(pathname, newname)