const { src, dest, watch, parallel } = require('gulp');

const sass = require('gulp-dart-sass');
(fileinclude = require('gulp-file-include')),
	(cfg = require('./package.json').config),
	(csso = require('gulp-csso')),
	(concat = require('gulp-concat')),
	(autoprefixer = require('gulp-autoprefixer')),
	(browserSync = require('browser-sync').create()),
	(terser = require('gulp-terser')),
	(browserslist = ['> 1%, last 3 versions, not dead']);

function html() {
	return src([cfg.srcDir + '/*.html'])
		.pipe(
			fileinclude({
				prefix: '@@',
				basepath: '@file',
			}),
		)
		.pipe(dest(cfg.outputDir))
		.pipe(browserSync.stream({ once: true }));
}

function styles() {
	return (
		src(cfg.srcDir + 'scss/**/*.{scss,sass}', { sourcemaps: true })
			.pipe(
				sass({
					outputStyle: 'expanded', // expanded/compressed
					silenceDeprecations: ['legacy-js-api'], // Disable old API warnings
				}).on('error', sass.logError),
			)
			.pipe(
				autoprefixer({
					overrideBrowserslist: browserslist,
				}),
			)
	
			.pipe(dest(cfg.outputDir + 'css', { sourcemaps: '.' }))
			.pipe(browserSync.stream({ once: true }))
	);
}

function stylesMin() {
	return (
		src(cfg.srcDir + 'scss/**/*.{scss,sass}', { sourcemaps: false })
			.pipe(
				sass({
					outputStyle: 'compressed', // expanded/compressed
					silenceDeprecations: ['legacy-js-api'], // Disable old API warnings
				}).on('error', sass.logError),
			)
			.pipe(
				autoprefixer({
					overrideBrowserslist: browserslist,
				}),
			)
			// .pipe(csso())
			.pipe(dest(cfg.outputDir + 'css'))
	);
}

function scripts() {
	return src(cfg.srcDir + 'js/**/*.js')
		.pipe(concat('script.min.js'))
		.pipe(terser())
		.pipe(dest(cfg.outputDir + 'js'))
		.pipe(browserSync.stream({ once: true }));
}

function imageSync() {
	return src('src/imgs/**/*', { encoding: false })
		.pipe(dest('app/imgs'))
		.pipe(browserSync.stream({ once: true }));
}

function browsersync() {
	browserSync.init({
		server: {
			baseDir: cfg.outputDir,
		},
	});
}

function watching() {
	watch([cfg.srcDir + 'scss/**/*.scss'], styles);
	watch([cfg.srcDir + 'js/**/*.js'], scripts);
	watch([cfg.srcDir + '/**/*.html'], html);
	watch([cfg.srcDir + 'imgs/**/*'], imageSync);
}

async function loadPrettier() {
	const prettier = await import('gulp-prettier');
	return prettier.default;
}

async function pretty() {
	const prettier = await loadPrettier();
	return src(['src/**/*', '!src/imgs/**/*']).pipe(prettier()).pipe(dest('src'));
}

exports.format = pretty;
exports.cssmin = stylesMin;
exports.default = parallel(html, styles, scripts, imageSync, watching, browsersync);
