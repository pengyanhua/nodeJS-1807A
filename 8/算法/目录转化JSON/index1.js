const fs = require("fs");
const path = require("path");
// 读取目录生成对一个你的JSON
const loadFolder = (dir) => {
    return fs.statSync(dir).isFile() ? {
        name: path.basename(dir),
        pathname: dir,
        type: "file",
        size: fs.statSync(dir).size,
        ext: path.extname(dir),
        content: fs.readFileSync(dir, "utf-8")
    } : {
        name: path.basename(dir),
        pathname: dir,
        type: "folder",
        children: fs.readdirSync(dir).map(item => loadFolder(dir + "/" + item))
    }
}
let data = loadFolder("dist");
fs.writeFileSync("data.json", JSON.stringify(data))