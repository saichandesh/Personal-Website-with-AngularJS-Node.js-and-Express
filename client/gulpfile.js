var gulp = require('gulp');


// -----[ Plugins ]---------------------------------------------------------------
var connect = require('gulp-connect');
var sequence = require('run-sequence');
var history = require('connect-history-api-fallback');
var concat = require('gulp-concat');
var merge = require('merge-stream');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');

// -----[ JS files ]---------------------------------------------------------------
var js = [ 'bootstrap/js/bootstrap.min.js',
		   'bower_components/angular/angular.js',
		   'bower_components/angular-animate/angular-animate.js',
		   'bower_components/angular-resource/angular-resource.js',
		   'bower_components/angular-ui-router/release/angular-ui-router.js',
		   'bower_components/angular-sanitize/angular-sanitize.js'
		 ];

// -----[ Tasks ]---------------------------------------------------------------

// -----[ Connect Task ]------------
gulp.task('connect', function() {
	return connect.server({
		port: 9019,
		livereload: true,
		middleware: function(connect, opt) {
			return [
				history({})
			];
		}
	});
});

// -----[ Concat bower components Task ]------------
gulp.task('concatbowercomponents',function(){
	return gulp.src(js)
			   .pipe(plumber())
			   .pipe(concat('bowercomponents.js'))
			   .pipe(uglify())
			   .pipe(gulp.dest('./assets/js/'));
});

// -----[ Concat js files Task ]------------
gulp.task('concatjs',function(){
	return gulp.src(['./app.js','./modules/**/*.js'])
			   .pipe(plumber())
	           .pipe(concat('script.js'))
	           .pipe(uglify())
	           .pipe(gulp.dest('./assets/js/'))
	           .pipe(connect.reload());
});

// -----[ Concat Task ]------------
gulp.task('concat',function(){
	sequence('concatjs','concatbowercomponents');
});

// -----[ Sass Task ]------------
gulp.task('sass',function(){
	return  gulp.src(['./app.scss','./modules/**/*.scss'])
			    .pipe(plumber())
			    .pipe(concat('style.scss'))
			    .pipe(sass())
			    .pipe(gulp.dest('./assets/css/'))
	  		    .pipe(connect.reload());
});

			  

// -----[ HTML Task ]------------
gulp.task('html', function() {
	return gulp.src(['./index.html', './modules/**/*.html'])
	.pipe(connect.reload());
});

// -----[ Watch Task ]------------
gulp.task('watch',function(){
	gulp.watch(['./index.html','./modules/**/*.html'],['html']);
	gulp.watch(['./app.js','./modules/**/*.js'], ['concatjs']);
	gulp.watch(['./app.scss','./modules/**/*.scss'], ['sass']);
});

// -----[ Default Task ]------------
gulp.task('default',function(){
	sequence('connect','concat','sass','watch');
});