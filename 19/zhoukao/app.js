const express = require("express");
const app = express();
const loginRouter = require("./server/login");
const checkCodeRouter = require("./server/checkCode");
const listRouter = require("./server/list");


app.use(express.static("public", {
    index: "login.html"
}))
app.use(express.json())
app.use(express.urlencoded())




app.use(loginRouter)
app.use(checkCodeRouter)
app.use(listRouter)


app.listen(8080, () => console.log(8080))