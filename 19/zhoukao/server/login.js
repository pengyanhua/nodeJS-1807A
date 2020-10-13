const express = require("express");
const route = express.Router();


route.post("/api/login", (req, res) => {
    let {
        username,
        password
    } = req.body;
    if (username === "张三" && password === "123") {
        res.send({
            code: 1
        })
    } else {
        res.send({
            code: 0
        })
    }
})


module.exports = route;