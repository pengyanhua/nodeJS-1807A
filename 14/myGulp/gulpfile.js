const gulp = require("gulp");
const htmlminify = require("gulp-html-minify");
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
// 新建一个任务
// 语法：gulp.task("任务名称",回调函数)
gulp.task("html", () => {
    // 读取文件
    // gulp.src("文件路径")
    return gulp.src("public/index.html")
        .pipe(htmlminify()) //使用插件 压缩html
        // 流试写入数据
        // pipe("路径")
        // gulp.desk("路径") //写入的路径 
        // 一般一起使用
        .pipe(gulp.dest("build"));
})



gulp.task("css", () => {
    return gulp.src("public/css/index.css")
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest("build/css"))
})

// 压缩js
gulp.task("js",()=>{
    return gulp.src("public/js/index.js")
        .pipe(uglify())
        .pipe(gulp.dest("build/js"))
})