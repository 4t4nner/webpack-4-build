const plumber = require('gulp-plumber')
const fileinclude = require('gulp-include-tag')

module.exports = (gulp, config, reload) => () => gulp
	.src(config.html.src)
	.pipe(plumber())
	.pipe(fileinclude())
	.pipe(gulp.dest(config.html.build))
	.pipe(plumber.stop())
	.pipe(reload({ stream: true }))
