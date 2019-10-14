// TODO проверить
const plumber = require('gulp-plumber')
const path = require('path')
const gulpData = require('gulp-data')
const gulppug = require('gulp-pug')
const extend = require('extend')

module.exports = (gulp, config, reload) => {
	const noCache = filepath => {
		const file = path.join('..', config.pug.data, filepath)
		delete require.cache[require.resolve(file)]
		return require(file)
	}

	return () => gulp.src(config.pug.src)
		.pipe(plumber())
		.pipe(gulpData(file => {
			const commonData = noCache('common')
			const tplData = noCache(path.basename(file.path, '.pug'))
			return extend(true, commonData, tplData)
		}))
		.pipe(gulppug({ pretty: true })) //
		.pipe(plumber.stop())
		.pipe(gulp.dest(config.pug.build))
		.pipe(reload({ stream: true }))
}
