'use strict';

// Copy All Files At The Root Level (app)
module.exports = function (gulp, plugins, config) { return function () {
  var path = '.tmp'; // '.tmp' for Jade, 'app' for disabled Jade

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
      path + '/elements/**/*.html',
      '!' + path + '/elements/elements.html'
      ])
      .pipe(gulp.dest('dist/elements')),

    gulp.src(path + '/elements/elements.html')
      .pipe(plugins.rename('elements.vulcanized.html'))
      .pipe(gulp.dest('dist/elements')),

    gulp.src('app/pages/**/*.md')
      .pipe(gulp.dest('dist/pages'))
  ).pipe(plugins.size({title: 'copy'}));
};};
