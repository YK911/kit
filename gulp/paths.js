module.exports = {
  src: {
    html: 'src/html/pages/**/*.+(html|nunjucks)',
    css: 'src/assets/scss/*.scss',
    js: 'src/assets/js/**/*.js',
    images: 'src/assets/images/**/*',
    fonts: 'src/assets/fonts/**/*',
    data: 'src/json/*',
    db: 'src/json/map-style.json',
    php: 'src/*.php',
  },
  watch: {
    html: 'src/html/**/*.html',
    css: 'src/assets/scss/**/*.scss',
    js: 'src/assets/js/**/*.js',
    images: 'src/assets/images/**/*',
    fonts: 'src/assets/fonts/**/*',
    data: 'src/json/data.json',
    db: 'src/json/map-style.json',
  },
  build: {
    html: 'build/',
    css: 'build/assets/css/',
    js: 'build/assets/js/',
    fonts: 'build/assets/fonts/',
    images: 'build/assets/images/',
    db: 'build/assets/json/',
    php: 'build/',
  },
  clean: 'build/',
};
