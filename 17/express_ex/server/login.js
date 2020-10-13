const express = require("express");
const route = express.Router();
const fs = require("fs");
module.exports = route;

route.post("/api/login", (req, res) => {
    // 获取用户名和密码
    let {
        username,
        password
    } = req.body;
    // 读取本地用户数据
    let user = JSON.parse(fs.readFileSync("mock/user.json"))
    // 设置开关变量  判断用户是否存在
    let flag = user.some(item => item.username === username && item.password === password);

    if (flag) {
        // 存在
        res.send({
            code: 1
        })
    } else {
        // 不存在
        res.send({
            code: 0
        })

    }
})