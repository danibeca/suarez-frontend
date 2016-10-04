module.exports = function (gulp, plugins, args) {
    return function () {
        var gFun = require('../../gulp_files/gulp.user.functions');
        var gConstants = require('../../gulp_files/gulp.user.config').constants();
        var config = {
            less: gConstants.less,
            temp: gConstants.temp
        };
        var browserSync = require('browser-sync');

        gFun.log('Compiling Less --> CSS', plugins);

        return gulp
                    .src(config.less)
                    .pipe(plugins.plumber()) // exit gracefully if something fails after this
                    .pipe(plugins.less())
                    //        .on('error', errorLogger) // more verbose and dupe output. requires emit.
                    .pipe(plugins.autoprefixer({browsers: ['last 2 version', '> 5%']}))
                    .pipe(gulp.dest(config.temp))
                    .pipe(browserSync.stream({match: '**/*.css'}));
            ;
    };
};