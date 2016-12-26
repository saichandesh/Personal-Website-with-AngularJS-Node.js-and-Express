var gulp = require('gulp');


// -----[ Plugins ]---------------------------------------------------------------
var connect = require('gulp-connect');
var history = require('connect-history-api-fallback');
var sequence = require('run-sequence');
var server = require('gulp-express');

// -----[ Tasks ]---------------------------------------------------------------

// -----[ Connect Task ]------------ 
gulp.task('server', function () {
    // Start the server at the beginning of the task 
    server.run(['server.js']);
    gulp.watch(['server.js'], [server.run]);
});

gulp.task('default',function(){
	sequence('server');
});