const express = require("express");
const app = express();
const fs = require("fs")


app.use(express.static("public"))

app.use(express.json())
app.use(express.urlencoded())

app.all("/getProduct", (req, res) => {
    let {
        limit, //每页个数
        page //第几页
    } = req.body;
    console.log(limit, page)
    let index = page - 1;
    let data = JSON.parse(fs.readFileSync("mock/list.json"));
    res.send(data.slice(index * limit, (index + 1) * limit))
})



app.listen(8080)