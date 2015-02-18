'use strict';

// Watch Files For Changes & Reload
module.exports = function (gulp, config, browserSync) { return function () {
	var reload = browserSync.reload;

	browserSync({
		browser: config.browserSync.browser,
		https: config.browserSync.https,
		notify: config.browserSync.notify,
		port: config.browserSync.port,
		server: {
			baseDir: ['.tmp', 'app'],
			routes: {
				'/bower_components': 'bower_components'
			}
		}
	});

	// watch for changes
	gulp.watch([
		'app/**/*.html',
		'.tmp/*.html',
		'.tmp/styles/**/*.css',
		'.tmp/elements/**/*.css',
		'app/images/**/*',
		'.tmp/fonts/**/*'
	]).on('change', reload);

	gulp.watch('app/**/*.{jade,md}', ['jade', reload]);
	gulp.watch('app/styles/**/*.scss', ['styles', reload]);
	gulp.watch('app/elements/**/*.scss', ['elements', reload]);
	gulp.watch('app/scripts/**/*.js', ['jshint', reload]);
	gulp.watch('app/elements/**/*.js', ['jshint', reload]);
	gulp.watch('app/fonts/**/*', ['fonts']);
	gulp.watch('bower.json', ['wiredep', 'fonts']);
};};
