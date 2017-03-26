#!/usr/bin/env node
var program = require('commander');
var searchAndReplace = require('./lib/utils').searchAndReplace;
var isCompressed = require('./lib/utils').isCompressed;
var removeExtension = require('./lib/utils').removeExtension;
var removeUnzipped = require('./lib/utils').removeUnzipped;
var unzipFile = require('./lib/unzipFile');
var zipFile = require('./lib/zipFile');

program
  .arguments('<filePath>')
  .option('-s, --search <search-url>', 'URL to seach')
  .option('-r, --replace <replace-url>', 'New URL')
  .action(function(filePath) {
    if(isCompressed(filePath)) {
      var filePathNoExtension = removeExtension(filePath);
      unzipFile(filePath);
      searchAndReplace(program.search, program.replace, filePathNoExtension);
      zipFile(filePathNoExtension);
      removeUnzipped(filePathNoExtension);
    } else {
      console.log('Replacing URL');
      searchAndReplace(program.search, program.replace, filePath);
    }

      console.log('Done');
  })
  .parse(process.argv);
