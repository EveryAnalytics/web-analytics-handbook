const { src, task, series, dest } = require('gulp');
const modifyFile = require('gulp-modify-file');

task('default', done => {
  src('./wiki.json')
    .pipe(
      modifyFile(content => {
        const json = JSON.parse(content);
        json.sort((a, b) => {
          return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        });
        return JSON.stringify(json, null, '\t');
      }),
    )
    .pipe(dest('./'));
  done();
});

exports.default = series('default');
