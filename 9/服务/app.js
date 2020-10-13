const http = require("http");
const fs = require("fs");
const url = require("url")
const path = require("path");
const server = http.createServer((req, res) => {
    // 1、获取请求体的路径
    let pathname = url.parse(req.url, true).pathname;
    console.log(pathname)
    // 2、判断是不是根路径
    if (pathname === "/") {
        pathname = "index.html"
    }
    // 3、返回数据    src/css/index.css
    res.end(fs.readFileSync(path.join("src", pathname)))


    // 2、根据路径返回对应信息
    // if (pathname === "/") {
    //     res.end(fs.readFileSync("src/index.html"))
    // } else if (pathname === "/css/index.css") {
    //     res.end(fs.readFileSync("src/css/index.css"))
    // } else if (pathname === "/favicon.ico") {
    //     res.end(fs.readFileSync("favicon.ico"))
    // } else if (pathname === "/js/index.js") {
    //     res.end(fs.readFileSync("src/js/index.js"))
    // } else if (pathname === "/images/1.jpg") {
    //     res.end(fs.readFileSync("src/images/1.jpg"))
    // }

})


server.listen(3000, () => console.log("server in running on port 3000"))