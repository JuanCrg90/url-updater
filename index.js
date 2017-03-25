#!/usr/bin/env node
var program = require('commander');
var searchAndReplace = require('./lib/utils').searchAndReplace;

program
  .arguments('<file>')
  .option('-s, --search <search-url>', 'URL to seach')
  .option('-r, --replace <replace-url>', 'New URL')
  .action(function(file) {
    searchAndReplace(program.search, program.replace, file)
  })
  .parse(process.argv);
