'use strict';

var gulp = require('gulp'), less = require('gulp-less'), cssmin = require('gulp-cssmin'), concat = require('gulp-concat'), errorlog = function(err) {console.error(err);};

gulp.task('indexcss', function() {
	return gulp.src('_includes/index.less')
		.pipe(less().on('error', errorlog))
		.pipe(cssmin().on('error', errorlog))
		.pipe(gulp.dest('_includes'));
});

gulp.task('externalcss', function() {
	return gulp.src([
			'.externals/bootstrap/css/bootstrap.min.css',
			'.externals/font-awesome/css/font-awesome.min.css'
			])
		.pipe(concat('external.css').on('error', errorlog))
		.pipe(gulp.dest('commons/css'));
});

gulp.task('externaljs', function() {
	return gulp.src([
			'../../jquery/jquery/dist/jquery.min.js',
			'.externals/bootstrap/js/bootstrap.min.js'
			])
		.pipe(concat('external.js').on('error', errorlog))
		.pipe(gulp.dest('commons/js'));
});

gulp.task('copyfonts', function() {
	return gulp.src(['.externals/bootstrap/fonts/*', '.externals/font-awesome/fonts/*'])
		.pipe(gulp.dest('commons/fonts'));
});

gulp.task('default', ['indexcss', 'externalcss', 'externaljs', 'copyfonts']);