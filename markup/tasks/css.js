module.exports = (gulp, config, reload) => () => gulp
  .src(config.css.src) //Выберем наш main.scss
  .pipe(gulp.dest(config.css.build))
  .pipe(reload({stream: true}))
