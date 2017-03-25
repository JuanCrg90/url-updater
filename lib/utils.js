var replace = require("replace");

function utils() {

  function isAbsoulutePath(path) {
    return path[0] === '/';
  }

  function searchAndReplace(searchPattern, replacePattern, path) {
    var paths = [isAbsoulutePath(path) ? path : './' + path];

    replace({
      regex: searchPattern,
      replacement: replacePattern,
      paths: paths,
      recursive: true,
      silent: true,
    });
  }

  return {
    searchAndReplace: searchAndReplace,
    isAbsoulutePath: isAbsoulutePath
  }
}

module.exports = utils();
