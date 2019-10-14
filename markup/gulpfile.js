const gulp = require('gulp')
const browser = require('browser-sync')
const rimraf = require('rimraf')

const config = require('./config.markup')

const getTask = function (task) {
	return require('./tasks/' + task)(gulp, config, browser.reload)
}

const scripts = getTask('scripts')
const css = getTask('css')
const sass = getTask('sass')
const pictures = getTask('pictures')
const images = getTask('images')
const fonts = getTask('fonts')


const build = gulp.parallel(scripts, css, sass, fonts, images, pictures)
gulp.task('build', build)

const parseConfig = c => {
	if(Array.isArray(c)){
		return c
	}
	return [c]
}

gulp.task(
	'watch', () => {
		gulp.watch([config.sass.watch], sass)
		gulp.watch([config.css.watch], css)
		gulp.watch(config.scripts.watch, scripts)
		gulp.watch([config.images.watch], images)
		gulp.watch([config.pictures.watch], pictures)
		gulp.watch([config.fonts.watch], fonts)
	}
)

gulp.task('clean', cb => rimraf(config.build, cb))

gulp.task('default', build)
