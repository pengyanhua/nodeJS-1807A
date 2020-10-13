const Mock = require("mockjs");
const fs = require("fs");
// 模拟数据
let data = Mock.mock({
    "list|10-15": [{
        "username": "@cname",
        "password": "@word(6,20)"
    }]
})


// 
fs.writeFileSync("data.json", JSON.stringify(data.list))