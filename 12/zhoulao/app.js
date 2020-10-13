// 1.遵循CommonJS规范正确引入Node核心模块fs（8分）
const fs = require("fs");
// 7.使用Promise封装fs模块的读取文件异步方法（8分）
const readFile = (pathname, encoding = "utf8") => {
    return new Promise((resolve, reject) => {
        fs.readFile(pathname, encoding, (error, data) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(data)
        })
    })
}
// 4.封装一个可以递归调用的函数，不能是手动一步步创建，手动创建0分（8分）
// 5.根据json数据结构要求，创建正确的目录结构（8分）
const JsonToFold = (data) => {
    // 3.分析读取到的json数据，正确创建文件或文件夹（8分）
    if (data.isFile === true) {
        // 获取内容数据
        let str = "";
        if (typeof data.content === "string") {
            str = data.content;
        } else {
            for (let [key, val] of Object.entries(data.content)) {
                str += `字段：${key},值：${val}\n`
            }
        }
        // 是文件\
        // 6.将content属性表示的内容写入文件中，正确写入json文件内容（8分）
        fs.writeFileSync(data.filepath, str)
        // 正确将每个文件的文件名，文件内容，文件大小，输出到控制台（8分）
        console.log(data.filename, data.content, fs.statSync(data.filepath).size)
    } else {
        // 是文件夹
        // 创建
        fs.mkdirSync(data.filepath);
        // 循环children
        data.children.forEach(item => JsonToFold(item))
    }
}

// 2.使用fs模块中读取文件的异步方法，读取素材提供的data.json文件（8分）
readFile("data.json").then(data => {
    data = JSON.parse(data);
    JsonToFold(data)
})