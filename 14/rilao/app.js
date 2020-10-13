const fs = require("fs");
const path = require("path");
const url = require("url");
const http = require("http");
const data = require("./mock/data.js")

const server = (req, res) => {
    let pathname = url.parse(req.url, true).pathname;
    pathname = pathname === "/" ? "index.html" : pathname;
    if (path.extname(pathname)) {
        res.end(fs.readFileSync(path.join("public", pathname)))
    }

    if (pathname === "/api/tab") {
        res.end(JSON.stringify(data))
    }
}


http.createServer(server).listen(8080, () => console.log("8080!!!"))