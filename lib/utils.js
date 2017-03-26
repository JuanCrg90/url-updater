var replace = require("replace");
var shell = require('shelljs');

function utils() {
  function isAbsoulutePath(filePath) {
    return filePath[0] === '/';
  }

  function isCompressed(filePath) {
    return filePath.search('.zip') !== -1;
  }

  function removeExtension(filePath) {
    return filePath.slice(0, filePath.length - 4);
  }

  function removeUnzipped(filePath) {
    shell.rm('-r', filePath);
  }

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

  return {
    isAbsoulutePath: isAbsoulutePath,
    isCompressed: isCompressed,
    removeExtension: removeExtension,
    removeUnzipped: removeUnzipped,
    searchAndReplace: searchAndReplace
  };
};

module.exports = utils();
