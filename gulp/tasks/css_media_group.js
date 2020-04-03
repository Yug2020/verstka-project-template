const gutil = require('gulp-util');
const path0 = require('../path0');
const path = require('path');
const gulp = require('gulp');


const gcmq = require('gulp-group-css-media-queries');


gulp.task('cssGropuMediaQuery', function () {  
//    return gulp.src('src/less/**/*.less')
    return gulp
		.src(path0.build.css+'style.css')
        .pipe(gcmq())		
        .pipe(gulp.dest(path0.build.css))
		.on('error', gutil.log);
});


