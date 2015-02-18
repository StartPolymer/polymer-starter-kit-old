'use strict';

// Compile and Automatically Prefix Stylesheets
module.exports = function (gulp, plugins, config) { return function () {
	return gulp.src('app/styles/*.scss')
		.pipe(plugins.changed('styles', {extension: '.scss'}))
		.pipe(plugins.rubySass({
				style: 'expanded',
				precision: 10,
				loadPath: ['.']
			})
			.on('error', console.error.bind(console))
		)
		.pipe(plugins.autoprefixer(config.autoprefixer.browsers))
		.pipe(gulp.dest('.tmp/styles'))
		// Concatenate And Minify Styles
		.pipe(plugins.if('*.css', plugins.cssmin()))
		.pipe(gulp.dest('dist/styles'))
		.pipe(plugins.size({title: 'styles'}));
};};
