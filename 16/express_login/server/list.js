const express = require("express");
const route = express.Router();
const fs = require("fs");
module.exports = route;



//  /api/list
route.post("/", (req, res) => {
    res.send(fs.readFileSync("mock/list.json"))
})



//  /api/list/del

route.post("/del", (req, res) => {
    let {
        id
    } = req.body;
    let data = JSON.parse(fs.readFileSync("mock/list.json"))
    data = data.filter(item => item.id != id);
    fs.writeFileSync("mock/list.json", JSON.stringify(data))
    res.send({
        code: 1
    })
})