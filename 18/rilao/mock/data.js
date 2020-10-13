const Mock = require("mockjs")
const fs = require("fs");





let data = Mock.mock({
    "list|20": [{
        "url": "@image(200x200,@color)",
        "title": "@ctitle",
        "desc": "@cword(80,160)"
    }]
})


fs.writeFileSync("list.json", JSON.stringify(data.list))