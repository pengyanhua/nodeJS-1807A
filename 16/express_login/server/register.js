const express = require("express");
const route = express.Router();
const fs = require("fs");
module.exports = route;



//   /api/user/register
route.post("/register", (req, res) => {
    let {
        username,
        password
    } = req.body;
    let data = JSON.parse(fs.readFileSync("mock/user.json"));
    let flag = data.some(item => item.username === username)


    if (flag) {
        res.send({
            code: 0
        })
    } else {
        data.push(req.body)
        fs.writeFileSync("mock/user.json",JSON.stringify(data))        
        res.send({
            code: 1
        })
    }


});