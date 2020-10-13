const express = require("express");
const app = express();

const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");


app.use(express.static("public", {
    index: "login.html"
}))

app.use(express.json());
app.use(express.urlencoded())

app.post("/api/login", (req, res) => {
    let {
        username,
        password
    } = req.body;
    let data = JSON.parse(fs.readFileSync("mock/user.json"));
    let flag = data.some(item => item.username === username && item.password === password)
    if (flag) {
        res.send({
            code: 1
        })
    } else {
        res.send({
            code: 0
        })
    }
})

app.post("/api/list", (req, res) => {
    res.send(fs.readFileSync("mock/list.json"))
})





app.listen(8080)