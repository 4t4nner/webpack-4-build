// проверить

var sassDataURI = require('lib-sass-data-uri');

module.exports = {
    build: "../src/frontend/web/*",
    scripts: {
        compress: false,
        src: "./src/js/*.{js,jsx}",
        watch: [
            './src/js/**/*.{js,jsx}',
            './src/js/*.{js,jsx}',
        ],
        build: "../src/frontend/web/assets/js/",
        entry: "./src/js/script.js",
        sourcemapsPath: '.'
    },
    css: {
        src: "./src/css/*.css",
        watch: "./src/css/**/*.css",
        build: "../src/frontend/web/assets/css/"
    },
    sass: {
        src: "./src/sass/*.{scss,sass}",
        watch: "./src/sass/**/*.{scss,sass}",
        build: "../src/frontend/web/assets/css/",
        sourcemapsPath: '.',
        sassConfig: {
            precision: 3,
            errLogToConsole: true,
            functions: Object.assign(sassDataURI, {other: function() {}}),
            includePaths: [
                './node_modules/swiper/dist/css/',
                './node_modules/ion-rangeslider/css/',
            ]
        }
    },
    images: {
        src: "./src/images/**/*.{jpg,png,svg}",
        watch: "./src/images/**/*.{jpg,png,svg}",
        build: "../src/frontend/web/assets/img/"
    },
    pictures: {
        src: "./src/pictures/**/*.{jpg,png,svg}",
        watch: "./src/pictures/**/*.{jpg,png,svg}",
        build: "../src/frontend/web/assets/pictures/"
    },
    fonts: {
        src: [
            './src/fonts/**/*',
            './node_modules/bootstrap-sass/assets/fonts/**/*'
        ],
        watch: "./src/fonts/**/*",
        build: "../src/frontend/web/assets/fonts/",
        formats: "woff ttf eot svg"
    },
};
