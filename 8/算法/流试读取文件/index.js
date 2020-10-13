const fs = require("fs");

// 创建读取流
let read = fs.createReadStream("1.mp4");
// 创建写入流
let write = fs.createWriteStream("3.mp4");
// 链接管道
read.pipe(write)