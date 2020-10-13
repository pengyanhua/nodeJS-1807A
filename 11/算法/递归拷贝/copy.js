// 递归复制目录
// 1、引入fs
const fs = require("fs");
//2、引入path
const path = require("path");
// 3.声明方法
const copy = (source, target) => {
    // 4、判断目录是否存在
    if (!fs.existsSync(source)) {
        throw new Error(source + "源目录不存在");
    }
    //5、目标目录不存在   =>创建目标目录
    if (!fs.existsSync(target)) {
        fs.mkdirSync(target);
    }
    // 6、读取源目录的子目录
    fs.readdirSync(source).forEach(item => {
        // 7.拼接路径
        let midSource = path.join(source, item),
            midTarget = path.join(target, item);
        // 8、判断是不是文件夹
        if (fs.statSync(midSource).isFile()) {
            // 是文件
            // 判断是否重名
            let ind = 0;
            while (fs.existsSync(midTarget)) {
                // 格式化
                let obj = path.parse(midTarget);
                // 中间变量
                let tar = path.join(obj.dir, obj.name + `(${++ind})` + obj.ext);
                // 判断是否存在
                if (!fs.existsSync(tar)) {
                    // 不存在复制
                    midTarget = tar;
                }
            }
            // 判断是不是大小文件
            if (fs.statSync(midSource).size > 4000) {
                let read = fs.createReadStream(midSource);
                let write = fs.createWriteStream(midTarget);
                read.pipe(write)
            } else {
                fs.copyFileSync(midSource, midTarget)
            }
        } else {
            // 是文件夹
            // 递归复制文件夹
            copy(midSource, midTarget)
        }
    })
}

// 抛出
module.exports = copy