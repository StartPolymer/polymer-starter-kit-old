'use strict';

// Inject bower components
module.exports = function (gulp, plugins, config) { return function () {
	var wiredep = require('wiredep').stream;

	gulp.src('app/styles/*.scss')
		.pipe(wiredep({
			ignorePath: /^(\.\.\/)+/
		}))
		.pipe(gulp.dest('app/styles'));

	gulp.src('app/layouts/*.jade')
		.pipe(wiredep({
			ignorePath: /^(\.\.\/)*\.\./,
			exclude: [
				'bower_components/polymer/polymer.js',
				'bower_components/webcomponentsjs/webcomponents.js'
			]
		}))
		.pipe(gulp.dest('app/layouts'));
};};
