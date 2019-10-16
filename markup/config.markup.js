var sassDataURI = require('lib-sass-data-uri');

module.exports = {
    build: "./build/*",
    scripts: {
        compress: false,
        src: "./src/js/*.{js,jsx}",
        watch: "./src/js/**/*.{js,jsx}",
        build: "./build/assets/js/",
        entry: "./src/js/app.js",
        sourcemapsPath: '.'
    },
    css: {
        src: "./src/css/*.css",
        watch: "./src/css/**/*.css",
        build: "./build/assets/css/"
    },
    sass: {
        src: "./src/sass/*.{scss,sass}",
        watch: "./src/sass/**/*.{scss,sass}",
        build: "./build/assets/css/",
        sourcemapsPath: '.',
        sassConfig: {
            precision: 3,
            errLogToConsole: true,
            functions: Object.assign(sassDataURI, {other: function() {}}),
            includePaths: [
                // './node_modules/swiper/dist/css/',
                // './node_modules/ion-rangeslider/css/',
            ]
        }
    },
    images: {
        src: "./src/images/**/*.{jpg,png,svg}",
        watch: "./src/images/**/*.{jpg,png,svg}",
        build: "./build/assets/img/"
    },
    pictures: {
        src: "./src/pictures/**/*.{jpg,png,svg}",
        watch: "./src/pictures/**/*.{jpg,png,svg}",
        build: "./build/pictures/"
    },
    sprites: {
        src: "./src/sprites/**/*.png",
        watch: "./src/sprites/**/*.png",
        build: "./src/sass/include/"
    },
    pug: {
        src: "./src/*.pug",
        watch: {
            pug: "./src/**/*.pug",
            data: "./src/data/**/*"
        },
        data: "./src/data/",
        build: "./build/"
    },
    html: {
        src: ['./src/html/**/*.html','./src/*.html',],
        watch: ['./src/html/**/*.html','./src/*.html',],
        build: "./build/"
    },
    fonts: {
        src: [
            './src/fonts/**/*',
            './node_modules/bootstrap-sass/assets/fonts/**/*',
            './node_modules/@fortawesome/fontawesome-free/**/fa-*.{eot,woff,woff2,svg}'
        ],
        watch: "./src/fonts/**/*",
        build: './build/assets/fonts',
        formats: "woff ttf eot svg"
    },
    browser: {
        disable: false,
        server: {
            baseDir: "./build"
        },
        // tunnel: true,
        host: 'localhost',
        port: 8000,
        logPrefix: "sibtruck"
    }
};
