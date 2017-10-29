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
    let postalPinyin = postal.fromChinese(argv[0]);
    if (postalPinyin) {
        console.log('Corresponding Postal System spelling is:');
        console.log(postalPinyin);
    }
    else {
        console.warn('No corresponding Postal System spelling found.');
    }
}

run.desc = 'Transfrom from Chinese to Postal System.'

module.exports = run;