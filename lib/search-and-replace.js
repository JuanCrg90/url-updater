var replace = require('replace');
var isAbsoulutePath = require('./utils').isAbsoulutePath;

function searchAndReplace(searchUrl, replaceUrl, filePath) {
  var paths = [isAbsoulutePath(filePath) ? filePath : './' + filePath];

  replace({
    regex: searchUrl,
    replacement: replaceUrl,
    paths: paths,
    recursive: true,
    silent: true,
  });
}

module.exports = searchAndReplace;
