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

  return {
    isAbsoulutePath: isAbsoulutePath,
    isCompressed: isCompressed,
    removeExtension: removeExtension,
    removeUnzipped: removeUnzipped
  };
};

module.exports = utils();
