const { task, src, series, dest } = require('gulp');
const log = require('fancy-log');
const modifyFile = require('gulp-modify-file');
const prettier = require('gulp-prettier');

task('check-wiki.json', done => {
  src('./wiki.json')
    .pipe(
      modifyFile(content => {
        let hasWrongFormatName = false;
        const wikiData = JSON.parse(content);

        for (let idx = 0; idx < wikiData.length; idx++) {
          if (isValidName(wikiData[idx].name) === false) {
            hasWrongFormatName = true;
            break;
          }
        }

        const sorted = !!hasWrongFormatName
          ? wikiData
          : wikiData.sort((a, b) => {
              return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
            });

        return JSON.stringify(sorted);
      }),
    )
    .pipe(prettier())
    .pipe(dest('./'));
  done();
});

function isValidName(str) {
  const regex =
    /^[a-zA-Z0-9가-힣][a-zA-Z0-9가-힣\s]*[a-zA-Z0-9가-힣]\s\([a-zA-Z0-9][a-zA-Z0-9\s]*[a-zA-Z0-9]\)/;

  if (regex.test(str) === false) {
    log.error(`
      Error occured in wiki.json data : ${str}
      Please check below wiki.json naming convetion
        ● Each part of name must start with non-whitespace
        ● First part of name must be combination of (korean | english | number | whitespace)
        ● Second part of name must be wrapped round brackets
        ● Second part of name must be combination of (english | number | whitespace)
        ● Second part of name must not be empty
        ● More than two words must be separated by ', '
    `);
    return false;
  }
  return true;
}

exports.default = series('check-wiki.json');
