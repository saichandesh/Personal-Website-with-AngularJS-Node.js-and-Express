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
var war = require('gulp-war');
var zip = require('gulp-zip');

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
// -----[ War Task ]-----------------
gulp.task('war', function () {
	return gulp.src([
		'assets*/**/*',
		'modules*/**/*.html',
		'src/WEB-INF*/**/*'
	])
	.pipe(war({
		welcome: 'index.html',
		displayName: 'Sai Chandesh Gurramkonda',
		webappExtras: [
			'<filter><filter-name>UrlRewriteFilter</filter-name><filter-class>org.tuckey.web.filters.urlrewrite.UrlRewriteFilter</filter-class></filter><filter-mapping><filter-name>UrlRewriteFilter</filter-name><url-pattern>/*</url-pattern><dispatcher>REQUEST</dispatcher><dispatcher>FORWARD</dispatcher></filter-mapping>'
		]
	}))
	.pipe(zip('saichandesh.war'))
	.pipe(gulp.dest("target/"));
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