const fs = require("fs");
const path = require("path");

class ReadFile {
    constructor(opt) {
        Object.assign(this, opt);
        // 读取html文件
        this.htmlCon = fs.readFileSync(this.html, "utf8");
        // 读取css文件夹
        this.cssCon = fs.readdirSync(this.css).map(item => {
            return fs.readFileSync(path.join(this.css, item), "utf8")
        }).join("")
        // 读取js文件夹
        this.jsCon = fs.readdirSync(this.js).map(item => {
            return fs.readFileSync(path.join(this.js, item), "utf8")
        }).join("")
        // 替换
        let str = this.htmlCon.replace("<!--injection style-->", `
            <style>${this.cssCon}</style>
        `).replace("<!--injection script-->", `
            <script>${this.jsCon}</script>
        `)
        fs.writeFileSync("index.html", str)

    }
}




new ReadFile({
    html: "src/index.html",
    css: "src/static/css",
    js: "src/static/js"
})