const express = require("express");
const route = express.Router();
const fs = require("fs");
module.exports = route;

// /api/user/login
route.post("/login", (req, res) => {
    let {
        username,
        password
    } = req.body;
    let data = JSON.parse(fs.readFileSync("mock/user.json"));
    let flag = data.some(item => item.username === username && item.password === password)
    flag ?
        res.send({
            code: 1
        }) :
        res.send({
            code: 0
        })


});