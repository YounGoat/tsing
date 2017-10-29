#!/usr/bin/env node

'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    
    /* NPM */
    , noda = require('noda')
    
    /* in-package */
    , wade = noda.inRequire('wade')
    ;

function run(argv) {
    let wadePinyins = wade.fromPinyin(argv);
    console.log('Corresponding Wade-Giles Romanization is:');
    console.log(wadePinyins.join(' '));
}

run.desc = 'Transform from Hanyu Pinyin to Wade-Giles System.'

module.exports = run;