const Mock = require("mockjs");
const fs = require("fs");


let data = Mock.mock({
    "list|5": [{
        "username": "@cname",
        "password": "@word(6,12)",
        "email": "@email"
    }]
})


fs.writeFileSync("user.json", JSON.stringify(data.list))