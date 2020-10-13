const http = require("http");
const path = require("path");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
    // 1、获取路径
    let pathname = url.parse(req.url, true).pathname;
    // 2、判断是不是根路径
    pathname = pathname === "/" ? "index.html" : pathname;
    // 返回静态页面
    res.end(fs.readFileSync(path.join("public", pathname)))
})

server.listen("8080")