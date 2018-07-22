/* 

Gulp eklenti tanimlamalari 

@sass 
sass dosyalarini css'e cevirir.

@uglifiy_js
js dosyalarini minify eder.

@file_include
html leri ayristirip moduler bir yapi olusturur.

@concat_css
css dosyalarını birlestirir.

@concat 
js dosyalarini birlestirir.

@minify_css
css dosyalarini minify eder.

@rename
dosyalari yeniden isimlendirebilmemize olanak saglar.  

@htmlmin
html dosyalarını minify etmeye yarar, js kodundaki kırılımlar olmadığı sürece tek satıra indirir


*/

var gulp = require("gulp"),
    sass = require("gulp-sass"),
    uglify_js = require("gulp-uglifyjs"),
    minify = require("gulp-minify"),
    file_include = require("gulp-file-include"),
    concat_css = require("gulp-concat-css"),
    concat = require("gulp-concat"),
    minify_css = require("gulp-minify-css"),
    rename = require("gulp-rename"),
    htmlmin = require('gulp-htmlmin'),
    // browserSync = require('browser-sync').create()
    image = require('gulp-image');



/* 

Assets (assets) klasorunde urun ortamina hazir sekilde yapilandirilmis klasorler ve dosyalar bulunur.
Dev (dev) klasorunde projenin yapilandirilandigi klasorler ve dosyalar bulunur.

*/

var public_dir = "public/",
    assets_dir = public_dir + "assets/",
    assets_css_dir = public_dir + "assets/css/",
    assets_js_dir = public_dir + "assets/js/",
    assets_img_dir = public_dir + "assets/img/",
    dev_dir = "dev/",
    dev_js_dir = "dev/js/",
    dev_layouts_dir = "dev/layouts/",
    dev_pages_dir = "dev/pages/",
    dev_scss_dir = "dev/scss/",
    dev_img_dir = "dev/img/**",
    dev_scss_sub_dir = "dev/scss/*/",
    dev_vendor_dir = "dev/vendor/";
dev_scss_sub_dir_watch = "dev/scss/**/",



    /* 
    Gorev I : sass

    Ana sass dosyasini (dev/scss/main.scss) css'e cevir ve cevirilen css dosyasini minify edilip public/assets/css klasorune main.min.css olarak kaydedilmesi.

    */

    gulp.task("sass", function () {
        return gulp.src(dev_scss_dir + "main.scss")
            .pipe(sass())
            .pipe(minify_css({
                compatibility: 'ie8'
            }))
            .pipe(sass().on('error', sass.logError))
            .pipe(rename('main.min.css'))
            .pipe(gulp.dest(assets_css_dir));

    });




/* 

Gorev II : minify_js

dev/js içinde bulunan tüm dosyaları alıp minify ederek public/assets/js içine kaydeder, uzantılarından önce ".min" ekler

*/



gulp.task("minify_js", function () {
    return gulp.src(dev_js_dir + "*.js")
        .pipe(minify({
            ext: {
                src: false,
                min: '.min.js'
            },
            noSource: "*"
        }))
        .pipe(gulp.dest(assets_js_dir));
});




/* 

Gorev IV : plugins_js

Kullanilan eklentilerde bulunan javascriptlerin (dev/vendor) birlestirilip public/assets/js klasorune plugins.min.js olarak kaydedilmesi.

*/


gulp.task("plugins_js", function () {
    /*return gulp.src()
    .pipe(concat("plugins.min.js"))
    .pipe(uglify_js())
    .pipe(gulp.dest(assets_js_dir));
    */
});


/* 

Gorev IV : resim_min

Kullanilan eklentilerde bulunan javascriptlerin (dev/vendor) birlestirilip public/assets/js klasorune plugins.min.js olarak kaydedilmesi.

*/



gulp.task('image', function () {
    gulp.src(dev_img_dir + '/*')
        .pipe(image())
        .pipe(gulp.dest(assets_img_dir));
});



/* 

Gorev V : plugins_css

Kullanilan eklentilerde bulunan css'lerin (dev/vendor) birlestirilip public/assets/css klasorune plugins.min.css olarak kaydedilmesi.

*/

gulp.task("plugins_css", function () {
    /*
    return gulp.src()
    .pipe(concat_css("plugins.min.css"))
    .pipe(minify_css({
        compatibility: 'ie8'
    }))
    .pipe(gulp.dest(assets_css_dir));
    */
});





/* 
Gorev VI : bootstrap

Bootstrap kutuphanesinin ozellestirilmis sass dosyalarının css e cevirilip public/assets/css klasorune bootstap.min.css olarak kaydedilmesi.

*/

gulp.task("bootstrap", function () {
    return gulp.src(dev_scss_dir + "bootstrap.scss")
        .pipe(sass())
        .pipe(minify_css({
            compatibility: 'ie8'
        }))

        .pipe(rename('bootstrap.min.css'))
        .pipe(gulp.dest(assets_css_dir));
});





/* 
Gorev VII : file_include

Parcalanmis html sablonlarini birlestirilmesi ve /public dizinine kaydedilmesi.

*/

gulp.task('file_include', function () {
    return gulp.src(dev_pages_dir + "*.html")
        .pipe(file_include({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(htmlmin({
            collapseWhitespace: true,
            minifyJS: true
        }))
        .pipe(gulp.dest(public_dir));
});


/* 

Degisiklik yapildikca calisacak gorevler

Gorev I (sass),
Gorev II (external_js),
Gorev III (main_js),
Gorev VI (bootstrap)
Gorev VII (file_include)

*/

gulp.task("watch", function () {
    gulp.watch(dev_scss_sub_dir_watch + "*.scss", ['sass']);
    gulp.watch(dev_js_dir + "*.js", ['minify_js']);
    gulp.watch(dev_scss_dir + "bootstrap/*.scss", ['bootstrap']);
    gulp.watch(dev_pages_dir + "*.html", ['file_include']);
    gulp.watch(dev_layouts_dir + "*.html", ['file_include']);
    gulp.watch(dev_layouts_dir + "*/*.html", ['file_include']);
    gulp.watch(dev_img_dir + "/*", ['image']);
});


// /* /* 
// gulp.task('browser-sync', function () {
//     browserSync.init({
//       notify: false,
//       server: {
//         baseDir: './'
//       }
//     })
//     gulp.watch(dev_layouts_dir + "*/*.html", ['file_include']);
//     gulp.watch('./scss/**/*.scss', ['css'])
//     gulp.watch('./js/**/*.js', reload)
//   }) */


/* 

Varsayilan olarak calistarilacak gorevler

Gorev I (sass),
Gorev II (external_js),
Gorev III (main_js),
Gorev IV (plugins_js)
Gorev V (plugins_css)
Gorev VI (bootstrap)
Gorev VII (file_include)

*/

gulp.task("default", ["watch", "sass", "minify_js", "plugins_js", "plugins_css", "bootstrap", "file_include", "image"]);