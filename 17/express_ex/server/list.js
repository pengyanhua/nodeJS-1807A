const express = require("express");
const route = express.Router();
const fs = require("fs");
module.exports = route;



// 数据获取接口
route.post("/api/list", (req, res) => {
    res.send(fs.readFileSync("mock/list.json"))
})


// 数据删除接口
route.post("/api/list/del", (req, res) => {
    // 获取要删除的ID
    let id = req.body.id;
    // 获取本地数据
    let data = JSON.parse(fs.readFileSync("mock/list.json"))
    // 过滤ID 删除前端传过来的ID
    data = data.filter(item => item.id != id);
    // 更新本地文件
    fs.writeFileSync("mock/list.json", JSON.stringify(data));
    // 成功了
    res.send({
        code: 1
    })
})


// 数据添加接口
route.post("/api/list/add", (req, res) => {
    // 获取本地数据
    let data = JSON.parse(fs.readFileSync("mock/list.json"))
    // 推入数据
    data.push(req.body)
    // 更新本地文件
    fs.writeFileSync("mock/list.json", JSON.stringify(data));
    // 成功了
    res.send({
        code: 1
    })
})



// 模糊搜索接口
route.post("/api/list/search", (req, res) => {
    let val = req.body.val;
    // 获取本地数据
    let data = JSON.parse(fs.readFileSync("mock/list.json"))
    // 模糊搜搜
    let arr = data.filter(item => item.title.includes(val))
    // 成功了
    res.send(arr)
})