#!/usr/bin/env node
console.log('Begin OCR\n');

const program = require('commander');

program
  .arguments('<file>')
  .action((file) => require('./textify')(file))
  .parse(process.argv)
