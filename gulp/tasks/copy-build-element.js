'use strict';

// Copy All Files At The Root Level (app)
module.exports = function (gulp, plugins, config) { return function () {
  // Root dir '.tmp' is for any template engine, 'app' is for disabled it
  var rootDir = 'app';

  return require('merge-stream')(
    gulp.src([
      rootDir + '/elements/**/*.{html,js,scss}',
      '!' + rootDir + '/elements/elements.html'
      ])
      .pipe(gulp.dest('dist'))

    //gulp.src('app/pages/**/*.md')
    //  .pipe(gulp.dest('dist/pages'))
  ).pipe(plugins.size({title: 'copy'}));
};};
