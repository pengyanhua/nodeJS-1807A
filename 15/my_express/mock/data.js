const Mock = require("mockjs");
const fs = require("fs");
const {
    json
} = require("express");

let data = Mock.mock({
    "list|10": [{
        "title": "@ctitle",
        "id": "@id"
    }],
    "user|10": [{
        "username": "@cname",
        "password": "@word(6,12)"
    }]
})




fs.writeFileSync("data.json", JSON.stringify(data.list))
fs.writeFileSync("user.json", JSON.stringify(data.user))