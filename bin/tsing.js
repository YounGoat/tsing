#!/usr/bin/env node

'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    , fs = require('fs')
    
    /* NPM */
    , noda = require('noda')
    
    /* in-package */
    ;

let argv = process.argv.slice(2);
let command = null;
if (argv.length && !argv[0].startsWith('-')) {
    command = argv.shift();
}

if (command) {
    noda.inRequire(`command/${command}`)(argv);
}
else {
    let names = fs.readdirSync(noda.inResolve('command'));
    console.log();
    console.log('NAME');
    console.log('\ttsing - Powerful manage tool for NPM package.');
    console.log();
    console.log('SYNOPSIS');
    names.forEach((name) => {
        name = name.replace(/\.js$/, '');
        let run = noda.inRequire(`command/${name}`);
        console.log(`\ttsing ${name}`);
        if (run.desc) {
            console.log(`\t${run.desc}`);
        }
        console.log();
    });
    console.log();
}