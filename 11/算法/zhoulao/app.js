const fs = require("fs");
const path = require("path");
// 1、生成个10文件
for (let i = 1; i <= 10; i++) {
    fs.writeFileSync(`src/${i}.txt`, `${Math.random()*10000000000000}`)
}

// 2/.读取
fs.readdirSync("src").map(item => {
    let pathname = path.join("src", item)
    let con = fs.readFileSync(pathname, "utf8")
    // console.log(con)
    if (+con < +new Date()) {
        fs.writeFileSync(pathname, "已经过期")
    } else {
        let time = con - new Date();
        fs.writeFileSync(pathname, `未来时间：${time}`);
        fs.renameSync(pathname, path.join(path.dirname(pathname), path.parse(pathname).name + "--" + time + path.extname(pathname)))
    }
})

for (let i = 10; i < 15; i++) {
    fs.writeFileSync(`src/${i}.txt`, "")
}
fs.readdirSync("src").map(item => {
    let pathname = path.join("src", item);
    let res = fs.readFileSync(pathname, "utf8");
    console.log(res)
    if (!res) {
        fs.unlinkSync(pathname);
        fs.appendFileSync("log.txt", path.basename(pathname) + "\n")
    }
})