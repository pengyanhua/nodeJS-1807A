const fs = require("fs");

class Read {
    constructor(opt) {
        Object.assign(this, opt);
        // 读取文件  css js html
        this.css = fs.readFileSync(this.cssPath, "utf8")
        this.js = fs.readFileSync(this.jsPath, "utf8")
        this.html = fs.readFileSync(this.htmlPath, "utf8")
        // 替换文件
        let str = this.html.replace("<!-- 此处替换css代码 -->", `
            <style>${this.css}</style>
        `).replace("<!-- 此处替换js代码 -->",`
            <script>${this.js}</script>
        `);
        fs.writeFileSync("build.html",str);
    }
}



let result = new Read({
    cssPath: "./src/css/index.css",
    jsPath: "./src/js/index.js",
    htmlPath: "./src/index.html",
})