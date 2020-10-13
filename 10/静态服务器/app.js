// 创建服务  
// 端口号  3000
// 当有人访问时 返回 字符串 123

const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");
// 1、创建服务
const server = http.createServer((req, res) => {
    // req 请求体  => request
    // res 响应体  => response
    // res.statusCode = 404
    // 2、获取访问的路径
    let pathname = url.parse(req.url, true).pathname;
    // 3、判断是不是根路径
    if (pathname === "/") {
        pathname = "index.html"
    }
    // 3.1 判断是不是图标文件
    if (pathname === "/favicon.ico") {
        return;
    }
    // 4、返回静态页面
    res.end(fs.readFileSync(path.join("public", pathname)))
})

// 2、启动服务 端口 3000
server.listen(8080, () => console.log("服务器启动了，端口号8080"))

// 1、npm i node-dev -g
// 2、node-dev 文件名称