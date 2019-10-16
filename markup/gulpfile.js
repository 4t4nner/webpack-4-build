const gulp = require('gulp')
const browser = require('browser-sync').create();
const rimraf = require('rimraf')

const config = require('./config.markup')

const getTask = function (task) {
	return require('./tasks/' + task)(gulp, config, browser.reload)
}

const scripts = getTask('scripts')
const css = getTask('css')
const html = getTask('html')
const sass = getTask('sass')
const pictures = getTask('pictures')
const images = getTask('images')
const fonts = getTask('fonts')

const build = gulp.parallel(scripts, css, sass, fonts, images, html, pictures)
gulp.task('build', build)

gulp.task('browser-sync', () => browser.init(config.browser));

const watch = gulp.parallel(() => {
	gulp.watch([config.sass.watch], sass)
	gulp.watch([config.css.watch], css)
	gulp.watch(config.scripts.watch, scripts)
	gulp.watch([config.images.watch], images)
	gulp.watch([config.pictures.watch], pictures)
	gulp.watch([config.fonts.watch], fonts)
	gulp.watch(config.html.watch, html)
},'browser-sync')

gulp.task('watch',watch)

gulp.task('clean', cb => rimraf(config.build, cb))

gulp.task('default', build)
