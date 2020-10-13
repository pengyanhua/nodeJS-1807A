const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.static("public", {
    index: "page.html"
}))

app.use(express.json())
app.use(express.urlencoded())
app.post("/api/page", (req, res) => {
    let {
        index,
        num
    } = req.body;
    let data = JSON.parse(fs.readFileSync("mock/list.json"));

    res.send({
        data: data.slice(index * num, (index + 1) * num), //返回对应的数据
        maxLen: Math.ceil(data.length / num)
    })
})


app.listen("8080");