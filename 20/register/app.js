const express = require("express");
const app = express();
const registerRouter = require("./server/register")



app.use(express.static("public", {
    index: "register.html"
}))

app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.use(registerRouter)

app.listen(8080, () => console.log("服务在8080启动了"))