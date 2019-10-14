module.exports = (gulp, config, reload) => () => gulp
	.src(config.pictures.src)
	.pipe(gulp.dest(config.pictures.build))
	.pipe(reload({ stream: true }))
