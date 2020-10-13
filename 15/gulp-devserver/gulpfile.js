const gulp = require("gulp");
const webserver = require('gulp-webserver');
const url = require("url")
const Mock = require("mockjs");
gulp.task("server", () => {
    return gulp.src("public")
        .pipe(webserver({
            livereload: true, //热更新
            port: 8080, //端口号
            open: true, //启动时打开浏览器
            // 中间件函数
            middleware(req, res, next) {
                let pathname = url.parse(req.url, true).pathname;
                // 登录接口
                if (pathname === "/api/login") {
                    let str = "";
                    req.on("data", chunk => {
                        str += chunk;
                    })
                    req.on("end", () => {
                        let obj = JSON.parse(str);
                        if (obj.username === "张三" && obj.password === "123") {
                            res.end("1")
                        } else {
                            res.end("0")
                        }
                    })
                }

                // 数据获取接口
                if (pathname === "/api/list") {
                    let data = Mock.mock({
                        "list|10": [{
                            title: "@ctitle",
                            url: "@image(200x100,@color)"
                        }]
                    })

                    res.end(JSON.stringify(data.list))
                }



                // 跳过中间件 继续往下执行
                next()
            }
        }))
})