var gulp = require('gulp');


// -----[ Plugins ]---------------------------------------------------------------
var connect = require('gulp-connect');
var history = require('connect-history-api-fallback');
var sequence = require('run-sequence');
var nodemon = require('gulp-nodemon');

// -----[ Tasks ]---------------------------------------------------------------

// -----[ Connect Task ]------------
gulp.task('server', function () {
  nodemon({
    script: 'server.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  })
})

// -----[ Restart Server ]------------
gulp.task('restartServer',function(){
	return gulp.src('./app.js')
			   .pipe(connect.reload());
});

// -----[ Watch Task ]------------
gulp.task('watch',function(){
	gulp.watch('./app.js',['restartServer']);
});

// -----[ Default Task ]------------
gulp.task('default',function(){
	sequence('server');
});