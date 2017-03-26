var shell = require('shelljs');
var fs = require("fs");
var isAbsoulutePath = require('./utils').isAbsoulutePath;
var removeExtension = require('./utils').removeExtension;

function unzipFile(filePath) {
  var inputPath = isAbsoulutePath(filePath) ? filePath : './' + filePath;
  var outputPath = removeExtension(inputPath);
  var command = 'unzip -qq ' + inputPath + ' -d ' + outputPath;

  shell.exec(command, {silent: true});
}

module.exports = unzipFile;
