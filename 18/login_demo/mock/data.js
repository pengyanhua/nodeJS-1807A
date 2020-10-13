const Mock = require("mockjs");
const fs = require("fs");

const data = Mock.mock({
    "list|10": [{
        "title": "@ctitle",
        "url": "@image(1000x600,@color)",
        "id": "@id",
        "desc": "@cword(1000)"
    }],
    "user|10": [{
        "username": "@email",
        "password": "@word(6,12)"
    }]
})


fs.writeFileSync("list.json", JSON.stringify(data.list))
fs.writeFileSync("user.json", JSON.stringify(data.user))