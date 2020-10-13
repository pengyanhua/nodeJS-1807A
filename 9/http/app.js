const http = require("http");
const fs = require("fs");


// 开个店  （创建服务）
// 语法：http.createServer(回调函数)
const server = http.createServer((req, res) => {
    // req 请求体  （包含用户信息）
    // res 响应体
    // console.log(req.url)
    // res.end(fs.readFileSync("index.html"))
    if (req.url === "/") {
        res.end(fs.readFileSync("index.html"))
    } else if (req.url === "/111") {
        // 设置返回信息的编码格式  这样就可以不乱码
        res.setHeader("Content-Type", "text/html;charset=utf-8")
        // 乱码了 所以需要设置请求头
        res.end("您访问了的路径是/111")
    } else {
        res.end("not found")
    }
})


// 营业  （开启服务）
// 语法：服务.listen("端口号")
server.listen(8080, () => console.log("开启服务器了！！！"))