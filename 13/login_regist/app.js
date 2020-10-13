const fs = require("fs");
const path = require("path");
const url = require("url");
const http = require("http");




let server = (req, res) => {
    // 1、获取访问的路径
    let pathname = url.parse(req.url, true).pathname;
    // 2、处理根路径
    pathname = pathname === "/" ? "login.html" : pathname;
    // 3、判断是不是静态资源 
    if (path.extname(pathname)) {
        // 3-1.返回public下的资源 
        res.end(fs.readFileSync(path.join("public", pathname)))
    }
    // 4 处理接口
    // 登录接口
    if (pathname === "/api/login") {
        // 获取前端传来用户名username和密码password
        // 处理post
        let str = "";
        // 开始接受数据 持续触发
        req.on("data", (chunk) => {
            str += chunk
        })
        // 数据传输完毕事件
        req.on("end", () => {
            let {
                username,
                password
            } = JSON.parse(str);
            let data = JSON.parse(fs.readFileSync("mock/data.json", "utf8"))
            let flag = data.some(item => item.username === username && item.password === password);
            flag ? res.end("1") : res.end("0");

        })
    }


    // 注册接口
    if (pathname === "/api/register") {
        let str = "";
        // 开始接受数据
        req.on("data", (chunk) => {
            str += chunk;
        })
        // 数据接受完毕 
        req.on("end", () => {
            // 解构用户名和密码
            let {
                username,
                password
            } = JSON.parse(str);
            // 读取本地数据
            let data = JSON.parse(fs.readFileSync("mock/data.json", "utf-8"));
            // 判断用户名是否存在
            let flag = data.some(item => item.username === username);

            if (flag) {
                // 说明用户存在  不能注册
                res.end("0")
            } else {
                // 不存在  可以注册
                // 将对象数据推入数据
                data.push(JSON.parse(str));
                // 更新本地数据
                fs.writeFileSync("mock/data.json", JSON.stringify(data))
                res.end("1");
            }
        })
    }
}


http.createServer(server).listen(8080, () => console.log("服务在8080启动了"))