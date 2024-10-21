import gulp from 'gulp';
import postcss from 'gulp-postcss';
import tailwindcss from 'tailwindcss';
import sourcemaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';
import imagemin from 'gulp-imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminOptipng from 'imagemin-optipng';
import imageminWebp from 'imagemin-webp';
import through from 'through2'; // Для логирования

const del = (await import('del')).deleteAsync;

// Инициализация BrowserSync
const bs = browserSync.create();

// Пути к ресурсам
const paths = {
    styles: {
        src: 'src/styles.css',
        dest: 'dist/css/'
    },
    html: {
        src: 'src/*.html',
        dest: 'dist/'
    },
    scripts: {
        src: 'src/*.js',
        dest: 'dist/js/'
    },
    images: {
        src: 'src/images/**/*.{jpg,jpeg,png,svg,webp}',  // Уточняем типы файлов
        dest: 'dist/images/'
    }
};

// Очистка папки dist
const clean = () => del(['dist']);

// Компиляция стилей с использованием Tailwind CSS
const styles = () => {
    return gulp.src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(postcss([tailwindcss])) // TailwindCSS интегрирован через PostCSS
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(bs.stream());
};

// Обработка HTML
const html = () => {
    return gulp.src(paths.html.src)
        .pipe(gulp.dest(paths.html.dest))
        .pipe(bs.stream()); // Обновление HTML в браузере
};

// Обработка JS
const scripts = () => {
    return gulp.src(paths.scripts.src)
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(bs.stream()); // Обновление JS в браузере
};

// Оптимизация изображений
// Оптимизация изображений
const images = () => {
    return gulp.src(paths.images.src, { encoding: false }) // Убедитесь, что используется правильный путь
        .pipe(imagemin([ // Примените плагины оптимизации
            imageminMozjpeg({ quality: 75, progressive: true }),
            imageminOptipng({ optimizationLevel: 5 }),
            imageminWebp({ quality: 75 })
        ]))
        .pipe(gulp.dest(paths.images.dest)); // Запись в выходную папку
};


// Запуск сервера с BrowserSync и наблюдение за файлами
const serve = () => {
    bs.init({
        server: {
            baseDir: 'dist'
        },
        port: 3072,
        ui: false
    });

    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.html.src, html);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.images.src, images);
};

// Задача по умолчанию
const build = gulp.series(clean, gulp.parallel(styles, html, scripts, images), serve);

// Отдельные задачи для изображений и очистки
gulp.task('images', images);
gulp.task('styles', styles);
gulp.task('clean', clean);

// Экспорт по умолчанию
export default build;

