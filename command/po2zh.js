#!/usr/bin/env node

'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    
    /* NPM */
    , noda = require('noda')
    
    /* in-package */
    , postal = noda.inRequire('postal')
    ;

function run(argv) {
    let postalPinyin = postal.toChinese(argv[0]);
    console.log('Corresponding Chinese is:');
    console.log(postalPinyin);
}

run.desc = 'Transform from Postal System to Chinese.';

module.exports = run;