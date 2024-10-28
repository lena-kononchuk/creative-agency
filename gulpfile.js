import gulp from 'gulp';
import postcss from 'gulp-postcss';
import tailwindcss from 'tailwindcss';
import sourcemaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';
import imagemin from 'gulp-imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminOptipng from 'imagemin-optipng';
import imageminWebp from 'imagemin-webp';
import cleanCSS from 'gulp-clean-css';
import terser from 'gulp-terser';
import through from 'through2'; // For logging

// Import 'del' for deleting files/folders asynchronously
const del = (await import('del')).deleteAsync;

// Initialize BrowserSync for live reloading
const bs = browserSync.create();

// Paths for resources
const paths = {
    styles: {
        src: 'src/styles.css', // Source path for styles
        dest: 'dist/css/' // Destination path for compiled CSS
    },
    html: {
        src: 'src/*.html', // Source path for HTML files
        dest: 'dist/' // Destination path for HTML files
    },
    scripts: {
        src: 'src/**/*.js', // Source path for JavaScript files
        dest: 'dist/js/' // Destination path for compiled JS
    },
    images: {
        src: 'src/images/**/*.{jpg,jpeg,png,svg,webp}',  // Source path for image files
        dest: 'dist/images/' // Destination path for optimized images
    }
};

// Clean the 'dist' folder
const clean = () => del(['dist']);

// Compile styles using Tailwind CSS
const styles = () => {
    return gulp.src(paths.styles.src) // Source CSS file
        .pipe(sourcemaps.init()) // Initialize sourcemaps
        .pipe(postcss([tailwindcss])) // Integrate TailwindCSS through PostCSS
        .pipe(sourcemaps.write('.')) // Write sourcemaps
        .pipe(gulp.dest(paths.styles.dest)) // Output compiled CSS
        .pipe(bs.stream()); // Stream changes to BrowserSync for live reload
};

// Minify CSS
const minifyCSS = () => {
    return gulp.src(paths.styles.dest + '*.css') // Path to compiled CSS
        .pipe(cleanCSS({ compatibility: 'ie8' })) // Minify CSS
        .pipe(gulp.dest(paths.styles.dest)); // Output path
};

// Process HTML files
const html = () => {
    return gulp.src(paths.html.src) // Source HTML files
        .pipe(gulp.dest(paths.html.dest)) // Output HTML files
        .pipe(bs.stream()); // Stream changes to BrowserSync for live reload
};

// Process JavaScript files
const scripts = () => {
    return gulp.src(paths.scripts.src) // Source JS files
        .pipe(gulp.dest(paths.scripts.dest)) // Output JS files
        .pipe(bs.stream()); // Stream changes to BrowserSync for live reload
};

// Minify JavaScript
const minifyJS = () => {
    return gulp.src(paths.scripts.dest + '*.js') // Path to compiled JS
        .pipe(terser()) // Minify JavaScript
        .pipe(gulp.dest(paths.scripts.dest)); // Output path
};

// Optimize images
const images = () => {
    return gulp.src(paths.images.src, { encoding: false }) // Source image files
        .pipe(imagemin([ // Apply image optimization plugins
            imageminMozjpeg({ quality: 75, progressive: true }), // Optimize JPEG images
            imageminOptipng({ optimizationLevel: 5 }), // Optimize PNG images
            imageminWebp({ quality: 75 }) // Convert to WebP format
        ]))
        .pipe(gulp.dest(paths.images.dest)); // Output optimized images
};

// Start the BrowserSync server and watch files for changes
const serve = () => {
    bs.init({
        server: {
            baseDir: 'dist' // Base directory for the server
        },
        port: 3072, // Port for the server
        ui: false // Disable the UI
    });

    // Watch for changes in styles, HTML, JS, and images
    gulp.watch(paths.styles.src, styles); // Watch styles
    gulp.watch(paths.html.src, html); // Watch HTML
    gulp.watch(paths.scripts.src, scripts); // Watch JS
    gulp.watch(paths.images.src, images); // Watch images
};

// Default task: clean, build assets, and start the server
const build = gulp.series(
    clean,
    gulp.parallel(styles, html, scripts, images),
    gulp.parallel(minifyCSS, minifyJS), // Add minification here
    serve
);

// Export individual tasks for images and cleaning
gulp.task('images', images);
gulp.task('styles', styles);
gulp.task('clean', clean);
gulp.task('default', build);

// Default export for the Gulp build
export default build;
