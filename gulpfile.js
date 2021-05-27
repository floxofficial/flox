const del = require('del');
const gulp = require('gulp');
const webpack = require('webpack');
const process = require('process');

const dev = require('./webpack/dev.js');
const prod = require('./webpack/prod.js');

const { src, dest, pipe, series } = gulp;

function clean(cb) {
  del('build/**').then(() => {
    cb();
  });
}

function copy() {
  return src('src/index.html').pipe(dest('build'));
}

function build() {
  const conf = process.env.NODE_ENV === 'development' ? dev : prod;

  return new Promise((resolve, reject) => {
    webpack(conf, (err, stats) => {
      if (err) {
        return reject(err);
      }

      if (stats.hasErrors()) {
        return reject(new Error(stats.compilation.errors.join('\n')));
      }

      console.log(
        stats.toString({
          assets: true,
          colors: true,
        }),
      );

      resolve();
    });
  });
}

exports.build = series(clean, copy, build);
