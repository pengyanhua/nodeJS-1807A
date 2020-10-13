const Mock = require("mockjs");
const fs = require("fs");

let data = Mock.mock({
    "list|100-200": [{
        "id|+1": 1,
        "name": "@cname",
        "age|18-28": 1
    }]
})

fs.writeFileSync("list.json",JSON.stringify(data.list))