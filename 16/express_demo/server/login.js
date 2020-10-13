const express = require("express");
const route = express.Router(); //路由



// 路由接口 login
route.post("/login", (req, res) => {
    let { username,password } = req.body;
    if(username === "张三" && password === "123"){
        res.send({ code:1 })
    }else{
        res.send({ code:0 })
    }
})


module.exports = route;