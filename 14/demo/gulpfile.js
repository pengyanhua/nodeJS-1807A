const gulp = require("gulp");
// 压缩html
const htmlminify = require("gulp-html-minify");
// 压缩css
const cleanCSS = require('gulp-clean-css');
// 编译sass|scss
const sass = require("gulp-sass")
// es6 =>es3  es5
const babel = require('gulp-babel');
// 压缩js
const uglify = require("gulp-uglify")
// 处理html
gulp.task("html", () => {
    return gulp.src("public/*.html")
        // 压缩html
        .pipe(htmlminify())
        .pipe(gulp.dest("build"))
})
// 处理scss
gulp.task("scss", () => {
    return gulp.src("public/scss/*.scss")
        // 编译sass
        .pipe(sass())
        // 压缩css
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest("build/css"))
})
// 处理js
gulp.task("js", () => {
    return gulp.src("public/js/*.js")
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest("build/js"))
})

// 打包任务
gulp.task("build", gulp.parallel(["html", "scss", "js"]))
// 自动化任务
gulp.task("auto", () => {
    gulp.watch("public", gulp.parallel(["build"]))
})