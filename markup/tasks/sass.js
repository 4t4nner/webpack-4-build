const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const csso = require('postcss-csso');
const prefixer = require('autoprefixer');
const rename = require('gulp-rename');

module.exports = (gulp, config, reload) => () => gulp
  .src(config.sass.src) //Выберем наш main.scss
  .pipe(plumber()) //
  .pipe(sourcemaps.init())
  .pipe(sass(config.sass.sassConfig).on('error', sass.logError))
  .pipe(postcss([
    csso({
      forceMediaMerge: true
    }),
    prefixer(),
  ]))
  .pipe(rename({suffix: '.min'}))
  .pipe(sourcemaps.write(config.sass.sourcemapsPath))
  .pipe(plumber.stop())
  .pipe(gulp.dest(config.sass.build))
  .pipe(reload({stream: true}))
