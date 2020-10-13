const Mock = require("mockjs");
const fs = require("fs");


let data = Mock.mock({
    "list|10": [{
        "title": "@ctitle",
        "age|10-30": 1,
        "sex": "@boolean",
        "id": "@id"
    }],
    "user|5": [{
        "username": "@cname",
        "password": "@word(1)"
    }]
})

fs.writeFileSync("list.json", JSON.stringify(data.list))
fs.writeFileSync("user.json", JSON.stringify(data.user))