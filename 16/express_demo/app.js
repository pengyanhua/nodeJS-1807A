// 引入express插件
const express = require("express");
// 获取实例
const app = express();
// 获取路由
const loginRouter = require("./server/login");

// 静态资源中间件
app.use(express.static("public", {
    index: "login.html"
}));
// 处理json
app.use(express.json())
// 处理表单
app.use(express.urlencoded())

// 使用路由
app.use("/api/user", loginRouter)
//       /api/user/login


// 起服务
app.listen(8080)