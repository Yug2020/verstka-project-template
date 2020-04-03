const gutil = require('gulp-util');
const path0 = require('../path0');
const path = require('path');
const gulp = require('gulp');

const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const pipeline = require('readable-stream').pipeline;


gulp.task('jsCompress', function () {
  return pipeline(
			gulp.src(path0.src.js),
			babel({
			  presets: ['@babel/preset-env']
			}),
			uglify(),
			gulp.dest(path0.build.js)
		);
});