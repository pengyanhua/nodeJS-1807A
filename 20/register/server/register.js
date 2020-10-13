const express = require("express");
const route = express.Router();
const fs = require("fs");
module.exports = route;





route.post("/api/register", (req, res) => {
    let {
        username,
        password,
        email
    } = req.body;
    // 非空验证
    if (username === "" || password === "" || email === "") {
        res.send({
            code: 0,
            mess: "账户密码邮箱不可以为空"
        })
    } else {
        let data = JSON.parse(fs.readFileSync("mock/user.json"));
        let flag = data.some(item => item.username === username);
        if (flag) {
            res.send({
                code: 0,
                mess: "此用户已经存在"
            })
        } else {
            data.push(req.body);
            fs.writeFileSync("mock/user.json", JSON.stringify(data))


            res.send({
                code: 1,
                mess: "注册成功"
            })
        }
    }
})