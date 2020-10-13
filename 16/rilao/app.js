const express = require("express");
const app = express();



app.use(express.static("public"))


app.get("/getUser", (req, res) => {
    res.send({
        username: "zhangsan",
        password: 123456
    })
})


app.listen(8080)