module.exports = (gulp, config, reload) => () => gulp
	.src(config.fonts.src)
	.pipe(gulp.dest(config.fonts.build))
	.pipe(reload({ stream: true }))
