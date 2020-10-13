const Mock = require("mockjs");
const fs = require("fs");
let data = Mock.mock({
    "list|5": [{
        "name": "@cname",
        "id": "@id"
    }]
})


fs.writeFileSync("list.json",JSON.stringify(data.list))