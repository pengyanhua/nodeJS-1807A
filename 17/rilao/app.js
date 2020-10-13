const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.static("public", {
    index: "form.html"
}));


app.get("/api/data", (req, res) => {
    res.send({
        name: "张三",
        age: 18
    })
})

app.listen(8080, () => console.log("8080"))