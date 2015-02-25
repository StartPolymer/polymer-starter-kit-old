'use strict';

// Compile and Automatically Prefix Stylesheets
module.exports = function (gulp, plugins, config, stylesDir) { return function () {
  var sourcePath = 'app/styles/*.scss';

  if (stylesDir === 'elements') {
    sourcePath = 'app/elements/**/*.scss';
  }

  return gulp.src(sourcePath)
    .pipe(plugins.changed(stylesDir, {extension: '.scss'}))
    .pipe(plugins.rubySass({
        style: 'expanded',
        precision: 10,
        loadPath: ['.']
      })
      .on('error', console.error.bind(console))
    )
    .pipe(plugins.autoprefixer(config.autoprefixer.browsers))
    .pipe(gulp.dest('.tmp/' + stylesDir))
    // Concatenate And Minify Styles
    .pipe(plugins.if('*.css', plugins.cssmin()))
    .pipe(gulp.dest('dist/' + stylesDir))
    .pipe(plugins.size({title: stylesDir}));
};};
