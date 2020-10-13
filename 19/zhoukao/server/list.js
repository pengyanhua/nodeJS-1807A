const express = require("express");
const route = express.Router();
const fs = require("fs");
module.exports = route;





route.get("/api/list", (req, res) => res.send(fs.readFileSync("mock/list.json")))



route.post("/api/list/add", (req, res) => {
    let data = JSON.parse(fs.readFileSync("mock/list.json"))
    data.push(req.body)
    fs.writeFileSync("mock/list.json", JSON.stringify(data))
    res.send({
        code: 1
    })
})

route.post("/api/list/modify", (req, res) => {
    let data = JSON.parse(fs.readFileSync("mock/list.json"));

    let obj = data.find(item => item.id === req.body.id)


    Object.assign(obj, req.body);


    fs.writeFileSync("mock/list.json", JSON.stringify(data))
    res.send({
        code: 1
    })

})