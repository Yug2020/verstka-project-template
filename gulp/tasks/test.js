const gutil = require('gulp-util');
const path0 = require('../path0');
const path = require('path');
const gulp = require('gulp');
//const gulp = require('gulp');

gulp.task('test1',async function(){
	console.log('Я работаю');
	console.log('path0.src.js=',path0.src.less);
/*
return gulp.src('src/less/**|/style.less')
        .pipe(less({
				paths: [ path.join(__dirname, 'less', 'includes') ]
			}))		
        .pipe(gulp.dest('build/css'))
        .on('error', gutil.log);
	*/
});