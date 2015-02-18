'use strict';

// Copy All Files At The Root Level (app)
module.exports = function (gulp, plugins, config) { return function () {
	return require('merge-stream')(
		gulp.src([
				'app/*',
				'!app/test',
				'!app/*.jade'
			], {
				dot: true
			}).pipe(gulp.dest('dist')),

		gulp.src('bower_components/**/*')
			.pipe(gulp.dest('dist/bower_components')),

		gulp.src('.tmp/elements/**/*.html')
			.pipe(gulp.dest('dist/elements')),

		gulp.src('.tmp/elements/elements.html')
			.pipe(plugins.rename('elements.vulcanized.html'))
			.pipe(gulp.dest('dist/elements'))
	).pipe(plugins.size({title: 'copy'}));
};};
