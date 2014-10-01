var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	browserify = require('gulp-browserify'),
	compass = require('gulp-compass'),
	concat = require('gulp-concat');

var coffeeSources = ['components/coffee/tagline.coffee'];
var jsSources = [
	'components/scripts/rclick.js',
	'components/scripts/pixgrid.js',
	'components/scripts/tagline.js',
	'components/scripts/template.js',
]; //jsSources

var sassSources = ['components/sass/style.scss']

gulp.task('coffee', function() {
	gulp.src(coffeeSources) //specifies source
		.pipe(coffee({ bare: true }) //pipe to some sort of command or method
			.on('error', gutil.log))
		.pipe(gulp.dest('components/scripts')) //send to destination
}); //task coffee

gulp.task('js', function(){
	gulp.src(jsSources)
		.pipe(concat('script.js'))
		.pipe(browserify())
		.pipe(gulp.dest('builds/development/js'))
}); //task js

gulp.task('compass', function(){
	gulp.src(sassSources)
		.pipe(compass({
			sass: 'components/sass',
			image: 'builds/development/images',
			style: 'expanded'
		}) //.pipe compass
		.on('error', gutil.log))
		.pipe(gulp.dest('builds/development/css'))
}); //task js

gulp.task('default', ['coffee', 'js', 'compass']);