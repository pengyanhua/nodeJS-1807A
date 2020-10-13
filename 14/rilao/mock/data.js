const Mock = require("mockjs");




let data = Mock.mock({
    "list|5": [{
        "title": "@ctitle",
        "children|3-5": [{
            "title": "@ctitle"
        }]
    }]
})

module.exports = data.list;