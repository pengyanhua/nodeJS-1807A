const express = require("express");
const app = express();
const fs = require("fs")
const loginRouter = require("./server/login");
const ListRouter = require("./server/list")
app.listen(8080, () => console.log("8080!!!!!"));

app.use(express.static("public", {
    index: "login.html"
}))
app.use(express.json())
// 处理表单中间件
app.use(express.urlencoded())
// 使用路由
app.use(loginRouter)
app.use(ListRouter)