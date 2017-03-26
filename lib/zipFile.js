var shell = require('shelljs');
var fs = require("fs");
var isAbsoulutePath = require('./utils').isAbsoulutePath;

function zipFile(filePath) {
  var inputPath =  filePath;
  var outputPath = inputPath + '-updated.zip'
  var command = 'cd ' + inputPath + ' && zip -qq -r ../' + outputPath + ' * ';

  shell.exec(command, {silent: false});
}

module.exports = zipFile;
