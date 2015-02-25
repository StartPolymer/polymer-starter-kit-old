'use strict';

// Copy All Files At The Root Level (app)
module.exports = function (gulp, plugins, config) { return function () {
  // Root dir '.tmp' is for any template engine, 'app' is for disabled it
  var rootDir = '.tmp';

  return require('merge-stream')(
    gulp.src([
        'app/*',
        '!app/test',
        '!app/*.jade'
      ], {
        dot: true
      }).pipe(gulp.dest('dist')),

    gulp.src([
      'bower_components/**/*.{css,html,js}',
      '!bower_components/**/{demo,index,metadata}.html'
      ])
      .pipe(gulp.dest('dist/bower_components')),

    gulp.src([
      rootDir + '/elements/**/*.html',
      '!' + rootDir + '/elements/elements.html'
      ])
      .pipe(gulp.dest('dist/elements')),

    gulp.src(rootDir + '/elements/elements.html')
      .pipe(plugins.rename('elements.vulcanized.html'))
      .pipe(gulp.dest('dist/elements')),

    gulp.src('app/pages/**/*.md')
      .pipe(gulp.dest('dist/pages'))
  ).pipe(plugins.size({title: 'copy'}));
};};
