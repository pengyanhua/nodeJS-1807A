const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));


const createFolder = (data) => {
    if (data.type === "file") {
        // 是文件
        fs.writeFileSync(data.pathname, data.content)
    } else {
        // 是文件夹
        // 先创建文件夹
        fs.mkdirSync(data.pathname);
        // 循环children
        data.children.forEach(item => createFolder(item))
    }
}

createFolder(data)