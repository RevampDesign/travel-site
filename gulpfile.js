var gulp = require('gulp'),
watch = require('gulp-watch'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
postcss = require('gulp-postcss');

gulp.task('default', function(){
    console.log("Gulp task created");
});

gulp.task('html', function(){
    console.log('html function');
});

gulp.task('styles', function(){
    console.log('Copies the css files into temp folder, passes through postcss to make it format like normal css');
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssvars, nested, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles')); /* using return because this is async funct. */
});

gulp.task('watch', function(){
    watch('./app/index.html', function(){
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('styles');
    }); /* /**/ /* is a wildcard for any subdirectory as is the next single * */
});