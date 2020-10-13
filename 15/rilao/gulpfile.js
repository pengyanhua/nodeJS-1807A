const gulp = require("gulp");
const babel = require('gulp-babel');


gulp.task("js", () => {
    return gulp.src("public/index.js")
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest("build"))
})