//scripts.js

/*var gulp = require('gulp'),
webpack = require('webpack');


gulp.task('scripts', function(callback){
	webpack(require('../../webpack.config.js'), function(){
	console.log('Hooray, webpack completed!');
	callback();
	});
});*/

var gulp = require('gulp'),
webpack = require('webpack');

gulp.task('scripts', function(callback) {
  webpack(require('../../webpack.config.js'), function(err, stats) {
    if (err) {
      console.log(err.toString());
    }

    console.log(stats.toString());
    callback();
  });
});