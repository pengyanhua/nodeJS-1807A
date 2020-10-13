const fs = require("fs");
const path = require("path");
const url = require("url");
const http = require("http");
const staticPath = "public";
// 服务
const server = (req, res) => {
    // 获取访问路径
    let pathname = url.parse(req.url, true).pathname;
    // 判断是不是根路径
    pathname = pathname === "/" ? "login.html" : pathname;
    // 处理网站图标   网上找了一个 所以这里不写代码了

    // 处理静态资源   => 都是文件  => 怎么去判断请求的资源 是不是静态资源也就是说是文件？
    if (path.extname(pathname)) {
        res.end(fs.readFileSync(path.join(staticPath, pathname)));
        return;
    }

    // 接口
    if (pathname === "/api/login") {
        let {
            username,
            password
        } = url.parse(req.url, true).query;
        if (username === "张三三" && password === "123456") {
            res.end("1")
        } else {
            res.end("0")
        }
        return;
    }

    // 404页面  
    res.end("404 not found")
}


// 创建服务同时监听8080
http.createServer(server).listen(8080, () => console.log("服务器在8080端口启动了！！"))