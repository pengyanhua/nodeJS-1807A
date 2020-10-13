// 起一个服务器  监听端口8080  处理静态资源
const express = require('express');
const app = express();
const fs = require("fs");
// 路由
const loginRouter = require("./server/login");
const registerRouter = require("./server/register")
const listRouter = require("./server/list")

app.use(express.static('public', {
    index: "login.html"
}));

app.use(express.json())
app.use(express.urlencoded());

// 使用登录路由
app.use("/api/user", loginRouter)
app.use("/api/user", registerRouter)
app.use("/api/list", listRouter)



app.listen(8080, () => console.log(8080))