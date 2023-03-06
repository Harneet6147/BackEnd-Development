#!/usr/bin/env node

const program = require("commander");
const pkg = require("../package.json");

program
    .version(pkg.version)
    .command('key', 'Manage API key -- http://coinlib.io')
    .command('check', 'Check Coin Price info')
    .parse(process.argv);




