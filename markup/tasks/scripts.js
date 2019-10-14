const sourcemaps = require('gulp-sourcemaps')
const minify = require('gulp-minify')
const plumber = require('gulp-plumber')
const fileinclude = require('gulp-file-include')
const gulpif = require('gulp-if')
const lazypipe = require('lazypipe')
const uglify = require('gulp-uglify')

module.exports = (gulp, config, reload) => {
	const compressPipe = lazypipe()
		.pipe(sourcemaps.init)
		.pipe(minify, {}, uglify)
		.pipe(sourcemaps.write, config.scripts.sourcemapsPath)

	return () => gulp.src(config.scripts.src)
		.pipe(plumber())
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(gulpif(config.scripts.compress, compressPipe()))
		.pipe(plumber.stop())
		.pipe(gulp.dest(config.scripts.build))
		.pipe(reload({ stream: true }))
}
