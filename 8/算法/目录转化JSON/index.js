const fs = require("fs");

// 读取目录生成对一个你的JSON
const loadFolder = (dir) => {
    // 判断文件是否存在
    if (fs.existsSync(dir)) {
        // 存在
        // 判断是不是文件
        if (fs.statSync(dir).isFile()) {
            // 是文件
            return {
                name: dir,
                pathname: dir,
                type: "file",
                size: fs.statSync(dir).size
            }
        } else {
            // 是文件夹
            return {
                name: dir,
                pathname: dir,
                type: "folder",
                children: fs.readdirSync(dir).map(item => loadFolder(dir + "/" + item))
            }
        }
    } else {
        // 不存在
        console.log(dir + "目录不存在")
    }
}


let data = loadFolder("dist");
fs.writeFileSync("data.json", JSON.stringify(data))