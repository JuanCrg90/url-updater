#!/usr/bin/env node

var program = require('commander');

program
  .arguments('<file>')
  .option('-s, --search <search-url>', 'URL to seach')
  .option('-r, --replace <replace-url>', 'New URL')
  .action(function(file) {
    console.log('search-url: %s replace-url: %s file: %s',
      program.search, program.replace, file);
  })
  .parse(process.argv);
