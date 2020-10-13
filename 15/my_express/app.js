const express = require("express"); //引入express
const app = express(); //获取顶层express实例
const fs = require("fs");
// 处理静态资源
app.use(express.static("public", {
    index: "login.html"
}))
//  处理json数据
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}))

// 处理接口
// 通过post发送的数据 会保存在 req.body上面
// 通过get发送的审计局 会保存在 req.query上面
app.post("/api/login", (req, res) => {
    // 解构数据
    let {
        username,
        password
    } = req.body;
    // 获取本地用户数据
    let user = JSON.parse(fs.readFileSync("mock/user.json"));
    // 判断=用户是否存在
    let flag = user.some(item => item.username === username && item.password === password);
    // 返回信息
    flag?res.send({ code:1 }) : res.send({ code :0 })
})
// 数据获取接口
app.post("/api/list", (req, res) => {
    res.send(fs.readFileSync("mock/data.json"))
})
// 数据删除接口  需要id
app.post("/api/del", (req, res) => {
    //获取ID
    let {
        id
    } = req.body;
    // 获取本地数据
    let data = JSON.parse(fs.readFileSync("mock/data.json"))
    // 过滤id
    data = data.filter(item => item.id != id);
    // 更新本地数据
    fs.writeFileSync("mock/data.json", JSON.stringify(data));
    res.send({
        code: 1
    })
})
// 注册接口
app.post("/api/register", (req, res) => {
    // 解构数据
    let {
        username,
        password
    } = req.body;
    // 获取本地用户数据
    let user = JSON.parse(fs.readFileSync("mock/user.json"));
    // 判断=用户是否存在
    let flag = user.some(item => item.username === username);
    // 返回信息
    // 存在 不让注册
    if(flag){
        res.send({ code:0 })
    }else{
        // 推入数据
        user.push(req.body)
        // 更新本地数据
        fs.writeFileSync("mock/user.json", JSON.stringify(user));
        // 返回信息
        res.send({ code:1 })

    }
})

// 开启服务
app.listen(8080, () => console.log("服务器启动了"))