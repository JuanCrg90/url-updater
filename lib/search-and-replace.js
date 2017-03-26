var replace = require('replace');
var isAbsoulutePath = require('./utils').isAbsoulutePath;

function searchAndReplace(searchPattern, replacePattern, filePath) {
  var paths = [isAbsoulutePath(filePath) ? filePath : './' + filePath];

  replace({
    regex: searchPattern,
    replacement: replacePattern,
    paths: paths,
    recursive: true,
    silent: true,
  });
}

module.exports = searchAndReplace;
