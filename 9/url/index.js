const url = require("url");



const str = "http://127.0.0.1:8080/api/list?page=2&id=123456789"
console.log(url.parse(str, true))