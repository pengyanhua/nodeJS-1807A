const fs = require("fs");

const copyFolder = (source, target) => {
    // 1、判断源目录和目标是否存在
    if (!fs.existsSync(source)) {
        throw new Error(source + "源目录不存在！！！！");
    }
    if (fs.existsSync(target)) {
        throw new Error(target + "源目录存在了！！！");
    }
    // 2、新建目标目录
    fs.mkdirSync(target);
    // 3、读取源目录的子目录
    fs.readdirSync(source).forEach(item => {
        // 获取正确的路径  需要拼接
        midTarget = target + "/" + item;
        midSource = source + "/" + item;
        // 判断是不是文件
        if (fs.statSync(midSource).isFile()) {
            // 
            if (fs.statSync(midSource).size > 40000) {
                // 流试去读
                let read = fs.createReadStream(midSource)
                let write = fs.createWriteStream(midTarget);
                read.pipe(write)
            } else {
                fs.copyFileSync(midSource, midTarget)
            }
        } else {
            copyFolder(midSource, midTarget)
        }
    })
}


copyFolder("build", "dist")