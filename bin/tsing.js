#!/usr/bin/env node

'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    
    /* NPM */
    , noda = require('noda')
    
    /* in-package */
    ;

let argv = process.argv.slice(2);
let command = null;
if (!argv[0].startsWith('-')) {
    command = argv.shift();
}

if (command) {
    noda.inRequire(`/command/${command}`)(argv);
}
else {
    // Base command.
}