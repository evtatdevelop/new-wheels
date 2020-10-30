const gulp = require('gulp');
const less = require('gulp-less');

const defaultTask = (cb) => {
  gulp.src('./source/less/style.less')
    .pipe(less())
    .pipe(gulp.dest('./source/css'));

  cb();
}

exports.default = defaultTask;
