const fs = require("fs");
const path = require("path");



const FoldToJson = (pathname) => {
    return fs.statSync(pathname).isFile() ? {
        name: path.basename(pathname),
        file: "file",
        content: fs.readFileSync(pathname)
    } : {
        name: path.basename(pathname),
        file: "fold",
        children: fs.readdirSync(pathname).map(item => FoldToJson(path.join(pathname, item)))
    }
}


let data = FoldToJson("build");
console.log(data)
fs.writeFileSync("data.json", JSON.stringify(data))