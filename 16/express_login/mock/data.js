const Mock = require("mockjs");
const fs = require("fs");

let data = Mock.mock({
    "user|10": [{
        "username": "@cname",
        "password": "@word(6,12)"
    }],
    "list|10": [{
        title: "@ctitle",
        "id": "@id",
        url: "@image(200x100,@color,@city)"
    }]
})


fs.writeFileSync("user.json", JSON.stringify(data.user))
fs.writeFileSync("list.json", JSON.stringify(data.list))