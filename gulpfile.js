var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	concat = require('gulp-concat');

var coffeeSources = ['components/coffee/tagline.coffee'];
var jsSources = [
	'components/scripts/rclick.js',
	'components/scripts/pixgrid.js',
	'components/scripts/tagline.js',
	'components/scripts/template.js',
];

gulp.task('coffee', function() {
	gulp.src(coffeeSources) //specifies source
		.pipe(coffee({ bare: true }) //pipe to some sort of command or method
			.on('error', gutil.log))
		.pipe(gulp.dest('components/scripts')) //send to destination
}); //task coffee

gulp.task('js', function(){
	gulp.src(jsSources)
		.pipe(concat('script.js'))
		.pipe(gulp.dest('builds/development/js'))
}); //task js