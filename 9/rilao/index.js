const fs = require("fs");

class ReadFile {
    constructor(opt) {
        Object.assign(this, {}, opt);
        if (fs.statSync(this.pathname).size > 40000) {
            console.log("大文件读取")
            fs.createReadStream(this.pathname)
        } else {
            console.log("小文件读取")
            fs.readFileSync(this.pathname)
        }
    }
}

new ReadFile({
    pathname: "2.mp4"
})